import { Briefcase } from "lucide-react";
import { useApp } from "@/contexts/AppContext";
import type { TranslationKey } from "@/i18n/translations";
import { Section } from "./Section";

interface WorkPlace {
    roleKey: TranslationKey;
    companyKey: TranslationKey;
    periodKey: TranslationKey;
    bullets: TranslationKey[];
}

export function Experience() {
    const { t } = useApp();

    const jobs: WorkPlace[] = [
		{
            roleKey: "exp_sofa_role",
            companyKey: "exp_sofa_company",
            periodKey: "exp_sofa_period",
            bullets: ["exp_sofa_b1", "exp_sofa_b2", "exp_sofa_b3", "exp_sofa_b4"],
        },
        {
            roleKey: "exp_role",
            companyKey: "exp_company",
            periodKey: "exp_period",
            bullets: ["exp_b1", "exp_b2", "exp_b3", "exp_b4"],
        },
    ];

    return (
        <Section id="experience" eyebrow={t("exp_eyebrow")} title={t("exp_title")}>
            {/* Kontejner za vertikalnu liniju vremenske crte */}
            <div className="relative pl-8 border-l border-border space-y-8">
                {jobs.map((job, index) => (
                    <div key={index} className="relative group">
                        {/* Kružić na vremenskoj crti */}
                        <div className="absolute -left-10.25 top-2 w-4 h-4 rounded-full bg-gradient-primary shadow-glow transition-transform group-hover:scale-125 duration-300" />
                        
                        {/* Kartica s poslom */}
                        <div className="p-6 rounded-2xl border border-border bg-card/50 hover:bg-card transition-all duration-300">
                            <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                                <div>
                                    <h3 className="text-xl font-display font-semibold flex items-center gap-2">
                                        <Briefcase size={18} className="text-primary" />
                                        {t(job.roleKey)}
                                    </h3>
                                    <p className="text-muted-foreground">{t(job.companyKey)}</p>
                                </div>
                                <span className="text-sm text-muted-foreground px-3 py-1 rounded-full border border-border">
                                    {t(job.periodKey)}
                                </span>
                            </div>
                            
                            {/* Natuknice */}
                            <ul className="space-y-2 text-muted-foreground">
                                {job.bullets.map((k) => (
                                    <li key={k} className="flex gap-3">
                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                        <span>{t(k)}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}