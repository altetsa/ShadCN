#!/usr/bin/env python3
import os
import json
import re
from pathlib import Path

REPO_ROOT = Path("/root/ShadCN")
PUBLIC_R = REPO_ROOT / "public" / "r"
PUBLIC_R.mkdir(parents=True, exist_ok=True)

NPM_DEP_PATTERNS = [
    r"@radix-ui/[a-z0-9-]+",
    r"class-variance-authority",
    r"clsx",
    r"tailwind-merge",
    r"lucide-react",
    r"cmdk",
    r"vaul",
    r"sonner",
    r"recharts",
    r"embla-carousel-react",
    r"input-otp",
    r"react-day-picker",
    r"date-fns",
    r"next-themes",
    r"cn",
]

def extract_dependencies(content: str):
    npm_deps = set()
    registry_deps = set()

    for pattern in NPM_DEP_PATTERNS:
        matches = re.findall(rf'from\s+["\']({pattern})["\']', content)
        for m in matches:
            npm_deps.add(m)

    ui_matches = re.findall(r'from\s+["\']@/components/ui/([a-z0-9-]+)["\']', content)
    for m in ui_matches:
        registry_deps.add(m)

    ai_matches = re.findall(r'from\s+["\']@/components/ai/([a-z0-9-]+)["\']', content)
    for m in ai_matches:
        registry_deps.add(f"ai-{m}")

    text_matches = re.findall(r'from\s+["\']@/components/text/([a-z0-9-]+)["\']', content)
    for m in text_matches:
        registry_deps.add(f"text-{m}")

    hook_matches = re.findall(r'from\s+["\']@/hooks/([a-z0-9-]+)["\']', content)
    for m in hook_matches:
        registry_deps.add(m)

    if '@/lib/utils' in content or '@/lib/cn' in content:
        registry_deps.add("utils")

    return sorted(list(npm_deps)), sorted(list(registry_deps))

def format_title(name: str):
    return " ".join(word.capitalize() for word in name.replace("-", " ").replace("_", " ").split())

items = []

# 1. Process lib (utils)
utils_path = REPO_ROOT / "lib" / "utils.ts"
if utils_path.exists():
    content = utils_path.read_text(encoding="utf-8")
    npm_deps, reg_deps = extract_dependencies(content)
    item = {
        "name": "utils",
        "type": "registry:lib",
        "title": "Utils",
        "description": "Utility functions for class name merging (cn) in Tailwind CSS.",
        "dependencies": ["clsx", "tailwind-merge"],
        "files": [
            {
                "path": "lib/utils.ts",
                "type": "registry:lib"
            }
        ]
    }
    items.append(item)
    item_standalone = {
        "$schema": "https://ui.shadcn.com/schema/registry-item.json",
        "name": item["name"],
        "title": item["title"],
        "description": item["description"],
        "dependencies": item["dependencies"],
        "files": [
            {
                "path": "lib/utils.ts",
                "content": content,
                "type": "registry:lib"
            }
        ],
        "type": "registry:lib"
    }
    (PUBLIC_R / f"{item['name']}.json").write_text(json.dumps(item_standalone, indent=2, ensure_ascii=False))

# 2. Process hooks
hooks_dir = REPO_ROOT / "hooks"
if hooks_dir.exists():
    for f in sorted(hooks_dir.glob("*.ts*")):
        name = f.stem
        content = f.read_text(encoding="utf-8")
        npm_deps, reg_deps = extract_dependencies(content)
        item = {
            "name": name,
            "type": "registry:hook",
            "title": format_title(name),
            "description": f"React hook: {name}.",
            "files": [
                {
                    "path": f"hooks/{f.name}",
                    "type": "registry:hook"
                }
            ]
        }
        if npm_deps:
            item["dependencies"] = npm_deps
        if reg_deps:
            item["registryDependencies"] = reg_deps
        items.append(item)

        item_standalone = {
            "$schema": "https://ui.shadcn.com/schema/registry-item.json",
            "name": name,
            "title": item["title"],
            "description": item["description"],
            "files": [
                {
                    "path": f"hooks/{f.name}",
                    "content": content,
                    "type": "registry:hook"
                }
            ],
            "type": "registry:hook"
        }
        if npm_deps:
            item_standalone["dependencies"] = npm_deps
        if reg_deps:
            item_standalone["registryDependencies"] = reg_deps
        (PUBLIC_R / f"{name}.json").write_text(json.dumps(item_standalone, indent=2, ensure_ascii=False))

# 3. Process components/ui
ui_dir = REPO_ROOT / "components" / "ui"
if ui_dir.exists():
    for f in sorted(ui_dir.glob("*.tsx")):
        name = f.stem
        content = f.read_text(encoding="utf-8")
        npm_deps, reg_deps = extract_dependencies(content)
        reg_deps = [d for d in reg_deps if d != name]

        item = {
            "name": name,
            "type": "registry:ui",
            "title": format_title(name),
            "description": f"Customizable {name} component with variants and accessibility.",
            "files": [
                {
                    "path": f"components/ui/{f.name}",
                    "type": "registry:ui"
                }
            ]
        }
        if npm_deps:
            item["dependencies"] = npm_deps
        if reg_deps:
            item["registryDependencies"] = reg_deps
        items.append(item)

        item_standalone = {
            "$schema": "https://ui.shadcn.com/schema/registry-item.json",
            "name": name,
            "title": item["title"],
            "description": item["description"],
            "files": [
                {
                    "path": f"components/ui/{f.name}",
                    "content": content,
                    "type": "registry:ui"
                }
            ],
            "type": "registry:ui"
        }
        if npm_deps:
            item_standalone["dependencies"] = npm_deps
        if reg_deps:
            item_standalone["registryDependencies"] = reg_deps
        (PUBLIC_R / f"{name}.json").write_text(json.dumps(item_standalone, indent=2, ensure_ascii=False))

# 4. Process components/ai
ai_dir = REPO_ROOT / "components" / "ai"
if ai_dir.exists():
    for f in sorted(ai_dir.glob("*.tsx")):
        name = f"ai-{f.stem}"
        raw_name = f.stem
        content = f.read_text(encoding="utf-8")
        npm_deps, reg_deps = extract_dependencies(content)
        reg_deps = [d for d in reg_deps if d != name and d != raw_name]

        item = {
            "name": name,
            "type": "registry:ui",
            "title": f"AI {format_title(raw_name)}",
            "description": f"React AI component: {raw_name} for conversational and agentic UIs.",
            "files": [
                {
                    "path": f"components/ai/{f.name}",
                    "type": "registry:ui"
                }
            ]
        }
        if npm_deps:
            item["dependencies"] = npm_deps
        if reg_deps:
            item["registryDependencies"] = reg_deps
        items.append(item)

        item_standalone = {
            "$schema": "https://ui.shadcn.com/schema/registry-item.json",
            "name": name,
            "title": item["title"],
            "description": item["description"],
            "files": [
                {
                    "path": f"components/ai/{f.name}",
                    "content": content,
                    "type": "registry:ui"
                }
            ],
            "type": "registry:ui"
        }
        if npm_deps:
            item_standalone["dependencies"] = npm_deps
        if reg_deps:
            item_standalone["registryDependencies"] = reg_deps
        (PUBLIC_R / f"{name}.json").write_text(json.dumps(item_standalone, indent=2, ensure_ascii=False))

# 5. Process components/text
text_dir = REPO_ROOT / "components" / "text"
if text_dir.exists():
    for f in sorted(text_dir.glob("*.tsx")):
        name = f"text-{f.stem}"
        raw_name = f.stem
        content = f.read_text(encoding="utf-8")
        npm_deps, reg_deps = extract_dependencies(content)
        reg_deps = [d for d in reg_deps if d != name and d != raw_name]

        item = {
            "name": name,
            "type": "registry:ui",
            "title": f"Text {format_title(raw_name)}",
            "description": f"Text animation component: {raw_name}.",
            "files": [
                {
                    "path": f"components/text/{f.name}",
                    "type": "registry:ui"
                }
            ]
        }
        if npm_deps:
            item["dependencies"] = npm_deps
        if reg_deps:
            item["registryDependencies"] = reg_deps
        items.append(item)

        item_standalone = {
            "$schema": "https://ui.shadcn.com/schema/registry-item.json",
            "name": name,
            "title": item["title"],
            "description": item["description"],
            "files": [
                {
                    "path": f"components/text/{f.name}",
                    "content": content,
                    "type": "registry:ui"
                }
            ],
            "type": "registry:ui"
        }
        if npm_deps:
            item_standalone["dependencies"] = npm_deps
        if reg_deps:
            item_standalone["registryDependencies"] = reg_deps
        (PUBLIC_R / f"{name}.json").write_text(json.dumps(item_standalone, indent=2, ensure_ascii=False))

# 5.5. Process components/admin
admin_dir = REPO_ROOT / "components" / "admin"
if admin_dir.exists():
    for f in sorted(admin_dir.rglob("*.tsx")):
        if f.name.endswith(".test.tsx"):
            continue
        raw_name = f.stem
        name = f"admin-{raw_name}" if not raw_name.startswith("admin-") else raw_name
        rel_path = f.relative_to(REPO_ROOT).as_posix()
        content = f.read_text(encoding="utf-8")
        npm_deps, reg_deps = extract_dependencies(content)
        reg_deps = [d for d in reg_deps if d != name and d != raw_name]

        item = {
            "name": name,
            "type": "registry:ui",
            "title": f"Admin {format_title(raw_name)}",
            "description": f"Admin dashboard component: {raw_name} from shadcn-admin.",
            "files": [
                {
                    "path": rel_path,
                    "type": "registry:ui"
                }
            ]
        }
        if npm_deps:
            item["dependencies"] = npm_deps
        if reg_deps:
            item["registryDependencies"] = reg_deps
        items.append(item)

        item_standalone = {
            "$schema": "https://ui.shadcn.com/schema/registry-item.json",
            "name": name,
            "title": item["title"],
            "description": item["description"],
            "files": [
                {
                    "path": rel_path,
                    "content": content,
                    "type": "registry:ui"
                }
            ],
            "type": "registry:ui"
        }
        if npm_deps:
            item_standalone["dependencies"] = npm_deps
        if reg_deps:
            item_standalone["registryDependencies"] = reg_deps
        (PUBLIC_R / f"{name}.json").write_text(json.dumps(item_standalone, indent=2, ensure_ascii=False))

# 6. Process blocks (both flat and subdirectories)

blocks_dir = REPO_ROOT / "blocks"
if blocks_dir.exists():
    for f in sorted(blocks_dir.rglob("*.tsx")):
        name = f.stem
        rel_path = f.relative_to(REPO_ROOT).as_posix()
        content = f.read_text(encoding="utf-8")
        npm_deps, reg_deps = extract_dependencies(content)
        item = {
            "name": name,
            "type": "registry:block",
            "title": format_title(name),
            "description": f"Pre-built {name} block section for marketing and product interfaces.",
            "files": [
                {
                    "path": rel_path,
                    "type": "registry:block"
                }
            ]
        }
        if npm_deps:
            item["dependencies"] = npm_deps
        if reg_deps:
            item["registryDependencies"] = reg_deps
        items.append(item)

        item_standalone = {
            "$schema": "https://ui.shadcn.com/schema/registry-item.json",
            "name": name,
            "title": item["title"],
            "description": item["description"],
            "files": [
                {
                    "path": rel_path,
                    "content": content,
                    "type": "registry:block"
                }
            ],
            "type": "registry:block"
        }
        if npm_deps:
            item_standalone["dependencies"] = npm_deps
        if reg_deps:
            item_standalone["registryDependencies"] = reg_deps
        (PUBLIC_R / f"{name}.json").write_text(json.dumps(item_standalone, indent=2, ensure_ascii=False))

# 7. Process rules/AGENTS.md
rules_file = REPO_ROOT / "rules" / "AGENTS.md"
if rules_file.exists():
    content = rules_file.read_text(encoding="utf-8")
    item = {
        "name": "agent-rules",
        "type": "registry:file",
        "title": "Agent Rules",
        "description": "Engineering standards and coding guidelines for AI coding agents.",
        "files": [
            {
                "path": "rules/AGENTS.md",
                "type": "registry:file",
                "target": "~/AGENTS.md"
            }
        ]
    }
    items.append(item)
    item_standalone = {
        "$schema": "https://ui.shadcn.com/schema/registry-item.json",
        "name": "agent-rules",
        "title": "Agent Rules",
        "description": "Engineering standards and coding guidelines for AI coding agents.",
        "files": [
            {
                "path": "rules/AGENTS.md",
                "content": content,
                "type": "registry:file",
                "target": "~/AGENTS.md"
            }
        ],
        "type": "registry:file"
    }
    (PUBLIC_R / "agent-rules.json").write_text(json.dumps(item_standalone, indent=2, ensure_ascii=False))

# Write master registry.json
registry_data = {
    "$schema": "https://ui.shadcn.com/schema/registry.json",
    "name": "altetsa",
    "homepage": "https://github.com/altetsa/ShadCN",
    "items": items
}

(REPO_ROOT / "registry.json").write_text(json.dumps(registry_data, indent=2, ensure_ascii=False))
(PUBLIC_R / "registry.json").write_text(json.dumps(registry_data, indent=2, ensure_ascii=False))

print(f"Registry successfully built! Total items indexed: {len(items)}")
print(f"Standalone JSON files written to {PUBLIC_R}")
