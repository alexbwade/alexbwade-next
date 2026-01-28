const FORMATS = {
  ESLINT: "eslint",
  JEST: "jest",
};

const getAliasedModules = (jsConfig) => {
  const entries = Object.entries(jsConfig.compilerOptions.paths);

  return entries.map(([alias, pathArray]) => {
    const filepath = pathArray[0];

    return [alias, filepath];
  });
};

const getAliasesEslint = (jsConfig) => {
  const modules = getAliasedModules(jsConfig);
  const aliases = [];

  for (const [alias, filepath] of modules) {
    const formattedAlias = alias.replace("/*", "");
    const formattedPath = filepath.replace("/*", "").replace("/index.js", "");

    aliases.push([formattedAlias, formattedPath]);
  }

  return aliases;
};

const getAliasesJest = (jsConfig) => {
  const modules = getAliasedModules(jsConfig);
  const aliases = {};

  for (const [alias, filepath] of modules) {
    const aliasSuffix = filepath.includes("index.js") ? "" : "(.*)$";
    const formattedAlias = `^${alias.replace("/*", aliasSuffix)}`;
    const formattedPath = filepath.replace("./", "<rootDir>/").replace("/*", "$1");

    aliases[formattedAlias] = formattedPath;
  }

  return aliases;
};

function getAliases({ format, config }) {
  if (!Object.values(FORMATS).includes(format)) {
    throw new Error("Invalid format passed to getAliases().");
  }

  const { ESLINT, JEST } = FORMATS;

  switch (format) {
    case ESLINT: {
      return getAliasesEslint(config);
    }
    case JEST: {
      return getAliasesJest(config);
    }
  }
}

export default getAliases;
