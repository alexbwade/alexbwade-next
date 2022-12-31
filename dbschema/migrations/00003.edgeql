CREATE MIGRATION m1l6w7mtzisdw4mnd5urdihxtoklmcxorgmm7snrshivodu7dyfftq
    ONTO m1v64v7itffim3h6t7bhuevo5zc246j2oojf6l3cohwlkv255g34qq
{
  ALTER TYPE default::User {
      CREATE INDEX ON (.email);
  };
  CREATE TYPE default::UserSettings {
      CREATE REQUIRED LINK user -> default::User;
      CREATE PROPERTY salutation -> std::str;
  };
  ALTER TYPE default::User {
      CREATE LINK settings -> default::UserSettings {
          ON TARGET DELETE ALLOW;
          CREATE CONSTRAINT std::exclusive;
      };
      ALTER PROPERTY name {
          RESET OPTIONALITY;
      };
  };
};
