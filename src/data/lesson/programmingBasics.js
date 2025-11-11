export const programmingBasics = [
	{
		id: 1,
		title: "プログラミングとPython",
		description:
			"プログラミングの基本概念と、人気の高い言語Pythonの特徴について学びます。",
		difficulty: "easy",
		contents: [
			{
				title: "プログラミングとは？",
				markdown: `
### プログラミングとは
プログラミングとは、コンピュータに命令を与えて動作させることです。

例えば：
\`\`\`python
print("Hello, World!")
\`\`\`
`,
			},
			{
				title: "Pythonの特徴",
				markdown: `
### Pythonの特徴
- 文法がシンプルで読みやすい
- 機械学習、Web開発、データ分析など幅広く使われる
`,
			},
		],
		quizzes: [
			{
				id: 1,
				type: "choice",
				question: "Pythonの特徴として正しいものはどれ？",
				options: [
					"文法が難しい",
					"機械学習に向いている",
					"ブラウザでしか動かない",
				],
				correctAnswer: "機械学習に向いている",
			},
			{
				id: 2,
				type: "written",
				question:
					"print関数を使って Hello, World と出力するコードを書いてください。",
				correctAnswer: ["print('Hello, World')", 'print("Hello, World")'],
			},
		],
	},
	{
		id: 2,
		title: "入出力の基本",
		description: "プログラムの基本となる入力と出力を学びます。",
		difficulty: "easy",
	},
	{
		id: 3,
		title: "変数とは？",
		description:
			"プログラムでデータを扱うための基本要素である変数について学びます。",
		difficulty: "easy",
	},
	{
		id: 4,
		title: "演算子",
		description: "数値演算や文字列操作に必要な演算子の使い方を学びます。",
		difficulty: "easy",
	},
	{
		id: 5,
		title: "条件分岐（if文）",
		description: "条件に応じて処理を分岐するif文の使い方を学びます。",
		difficulty: "easy",
	},
	{
		id: 6,
		title: "繰り返し処理（for文）",
		description: "同じ処理を繰り返す「for文」について学びます。",
		difficulty: "easy",
	},
	{
		id: 7,
		title: "配列（リスト）",
		description: "複数のデータをまとめて扱う配列（リスト）について学びます。",
		difficulty: "easy",
	},
	{
		id: 8,
		title: "型について",
		description: "Pythonにおける基本的なデータ型と型変換について学びます。",
		difficulty: "easy",
	},
];
