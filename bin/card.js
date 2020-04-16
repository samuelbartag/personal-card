#!/usr/bin/env node
// Usado para dizer ao Node.js que se trata de uma ferramenta do CLI

// Declarando os módulos:
const chalk = require("chalk");
const boxen = require("boxen");

// Definindo as opções para o ‘boxen’:
const options = {
  padding: 1,
  margin: 1,
  float: "center",
  borderStyle: "round"
};

// Inclusão do Text e mais as definições do ‘chalk’:
const data = {
  name: chalk.white.bold("         Samuel Santon Bartag"),
  handle: chalk.cyan.underline("samuelbartag"),
  work: chalk.white("Freelance Web Developer"),
  twitter_url: chalk.grey("https://twitter.com/"),
  twitter_usr: chalk.cyan("SamuelBartag"),
  github_url: chalk.grey("https://github.com/"),
  github_usr: chalk.red("samuelbartag"),
  linkedin_url: chalk.grey("https://www.linkedin.com/in/"),
  linkedin_usr: chalk.magenta("samuelbartag    "),
  web: chalk.green("https://samuelbartag.com.br"),
  npx: chalk.white("npx samuelbartag"),
  labelWork: chalk.white.bold("        Work:"),
  labelTwitter: chalk.white.bold("     Twitter:"),
  labelGitHub: chalk.white.bold("      GitHub:"),
  labelLinkedIn: chalk.white.bold("    LinkedIn:"),
  labelWeb: chalk.white.bold("         Web:"),
  labelCard: chalk.white.bold("        Card:")
};

// Aqui será a saída do nosso Cartão Pessoal em NPX:
const newline = "\n";
const heading = `${data.name} -> ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter_url}${
  data.twitter_usr
}`;
const githubing = `${data.labelGitHub}  ${data.github_url}${data.github_usr}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin_url}${
  data.linkedin_usr
}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Aqui devemos colocar toda a nossa saída numa única variável para que possamos usar
// o ‘boxen de maneira efetiva:
const output =
  heading +
  newline +
  newline +
  working +
  newline +
  twittering +
  newline +
  githubing +
  newline +
  linkedining +
  newline +
  webing +
  newline +
  newline +
  carding;

console.log(chalk.green(boxen(output, options)));
