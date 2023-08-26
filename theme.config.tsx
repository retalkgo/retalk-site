import type { DocsThemeConfig } from "nextra-theme-docs";
import React from "react";

const config: DocsThemeConfig = {
	logo: <strong>Retalk</strong>,
	project: {
		link: "https://github.com/retalkgo/retalk",
	},

	useNextSeoProps() {
		return {
			titleTemplate: "%s – Retalk",
		};
	},
	docsRepositoryBase: "https://github.com/retalkgo/retalk-site/blob/main",
	footer: {
		text: "Copyright by @retalkgo",
	},
	editLink: {
		text: "在GitHub上编辑此页面 →",
	},
	feedback: {
		content: "文档有问题？点击反馈 →",
		labels: "feedback",
	},
	search: {
		placeholder: "搜索文档",
	},
};

export default config;
