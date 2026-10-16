import { Badge } from "@/components/ui/badge";

const Compliance1 = () => {
  return (
    <section className="bg-muted/50 py-32">
      <div className="container">
        <div className="grid gap-9 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <Badge variant="outline" className="bg-background gap-1.5">
              <span className="size-1.5 rounded-full bg-green-500" />
              Compliance
            </Badge>
            <h1 className="text-balance text-4xl font-medium lg:text-5xl">
              Complete Compliance & Security Readiness
            </h1>
            <p className="text-muted-foreground text-lg">
              Stay compliant with privacy and healthcare regulations. Our
              platform meets GDPR and HIPAA requirements, providing data
              protection and compliance monitoring for regulated industries.
            </p>
            <div className="flex items-center gap-6">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/GDPR.svg"
                alt="GDPR"
                className="h-22 opacity-50 grayscale md:h-28 dark:invert"
              />
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/CCPA.svg"
                alt="ISO-27001"
                className="h-22 opacity-60 grayscale md:h-28 dark:invert"
              />
            </div>
          </div>
          <div className="border-border bg-background rounded-2xl border">
            <div className="border-border relative overflow-hidden border-b p-6 lg:px-8 lg:py-11">
              <div>
                <h2 className="text-xl font-medium lg:text-2xl">
                  Automated audit trails
                </h2>
                <p className="text-muted-foreground mt-2 w-3/4 pr-10 text-sm md:text-base">
                  Every action is logged and timestamped with immutable audit
                  trails for complete regulatory compliance.
                </p>
              </div>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/ISO-27001.svg"
                alt="ISO-27001"
                className="text-muted-foreground absolute -bottom-7 right-4 size-24 opacity-80 grayscale lg:right-8 lg:size-32 dark:invert"
              />
            </div>
            <div className="relative overflow-hidden p-6 lg:px-8 lg:py-11">
              <div>
                <h2 className="text-xl font-medium lg:text-2xl">
                  Compliance monitoring
                </h2>
                <p className="text-muted-foreground mt-2 w-3/4 pr-10 text-sm md:text-base">
                  Real-time monitoring ensures continuous compliance with
                  industry standards and regulations.
                </p>
              </div>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/ISO-27017.svg"
                alt="ISO-27001"
                className="text-muted-foreground absolute -bottom-7 right-4 size-24 opacity-80 grayscale lg:right-8 lg:size-32 dark:invert"
              />
            </div>
            <div className="border-border relative overflow-hidden border-t p-6 lg:px-8 lg:py-11">
              <div>
                <h2 className="text-xl font-medium lg:text-2xl">
                  Regulatory reporting
                </h2>
                <p className="text-muted-foreground mt-2 w-3/4 pr-10 text-sm md:text-base">
                  Generate compliance reports automatically to meet regulatory
                  requirements and audit demands.
                </p>
              </div>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/ISO-27018.svg"
                alt="ISO-27001"
                className="text-muted-foreground absolute -bottom-7 right-4 size-24 opacity-80 grayscale lg:right-8 lg:size-32 dark:invert"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Compliance1 };
