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

    # Match npm imports
    for pattern in NPM_DEP_PATTERNS:
        matches = re.findall(rf'from\s+["\']({pattern})["\']', content)
        for m in matches:
            npm_deps.add(m)

    # Match internal UI component imports: @/components/ui/<component>
    ui_matches = re.findall(r'from\s+["\']@/components/ui/([a-z0-9-]+)["\']', content)
    for m in ui_matches:
        registry_deps.add(m)

    # Match hooks imports: @/hooks/<hook>
    hook_matches = re.findall(r'from\s+["\']@/hooks/([a-z0-9-]+)["\']', content)
    for m in hook_matches:
        registry_deps.add(m)

    # Match utils import
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
    # Generate standalone json with content
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
    for f in sorted(hooks_dir.glob("*.ts")):
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
        # Avoid self-dependency in registryDependencies
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

# 4. Process blocks
blocks_dir = REPO_ROOT / "blocks"
if blocks_dir.exists():
    for f in sorted(blocks_dir.glob("*.tsx")):
        name = f.stem
        content = f.read_text(encoding="utf-8")
        npm_deps, reg_deps = extract_dependencies(content)
        item = {
            "name": name,
            "type": "registry:block",
            "title": format_title(name),
            "description": f"Pre-built {name} block section for marketing and product interfaces.",
            "files": [
                {
                    "path": f"blocks/{f.name}",
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
                    "path": f"blocks/{f.name}",
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

# 5. Process rules/AGENTS.md
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
