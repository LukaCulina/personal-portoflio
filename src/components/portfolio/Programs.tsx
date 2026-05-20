import { Code2, ExternalLink, Lightbulb, Users } from "lucide-react";
import { useApp } from "@/contexts/AppContext";
import type { TranslationKey } from "@/i18n/translations";
import { Section } from "./Section";

export function Programs() {
	const { t } = useApp();

	const programs: {
		name: string | TranslationKey;
		descKey: TranslationKey;
		icon: typeof Code2;
		tags: string[];
		link?: string;
	}[] = [
		{
			name: "prog_sofa_title",
			descKey: "prog_sofa_desc",
			icon: Code2,
			tags: ["React", "TypeScript", "Scrum / Agile"],
		},
		{
			name: "prog_incubator_title",
			descKey: "prog_incubator_desc",
			icon: Lightbulb,
			tags: ["Figma", "UX/UI", "Product Design"],
			link: "https://www.figma.com/proto/JTocLbdrSwTgySrCk0GPUr/Hepening?node-id=89-1464&starting-point-node-id=2%3A3",
		},
		{
			name: "Tech4Society",
			descKey: "proj_tech_desc",
			icon: Users,
			tags: ["Collaboration", "LLM", "Data Analysis"],
		},
	];

	return (
		<Section
			id="programs"
			eyebrow={t("programs_eyebrow")}
			title={t("programs_title")}
		>
			<div className="grid md:grid-cols-3 gap-5">
				{programs.map((p) => {
					const Icon = p.icon;
					const title =
						p.name === "Tech4Society" ? p.name : t(p.name as TranslationKey);

					return (
						<div
							key={p.name}
							className="group p-6 rounded-2xl border border-border bg-card/50 hover:bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant flex flex-col relative overflow-hidden"
						>
							<div className="w-11 h-11 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center mb-4 shadow-glow">
								<Icon size={20} />
							</div>

							<div className="flex items-start justify-between mb-2">
								<h3 className="font-display text-lg font-semibold">{title}</h3>
								{p.link && (
									<a
										href={p.link}
										target="_blank"
										rel="noreferrer"
										className="text-muted-foreground hover:text-primary transition-colors z-10"
										aria-label={`View ${title}`}
									>
										<ExternalLink size={18} />
									</a>
								)}
							</div>

							<p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
								{t(p.descKey)}
							</p>

							<div className="flex flex-wrap gap-1.5 z-10">
								{p.tags.map((tag) => (
									<span
										key={tag}
										className="text-xs px-2.5 py-1 rounded-full bg-secondary/60 text-muted-foreground border border-border"
									>
										{tag}
									</span>
								))}
							</div>
						</div>
					);
				})}
			</div>
		</Section>
	);
}
