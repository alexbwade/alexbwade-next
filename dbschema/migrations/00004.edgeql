CREATE MIGRATION m1b2vopzsgkjgqbpybpfeeecwhbr3rsidqdqpswn7uslaap72fv6aq
    ONTO m1l6w7mtzisdw4mnd5urdihxtoklmcxorgmm7snrshivodu7dyfftq
{
  CREATE TYPE default::Permission {
      CREATE REQUIRED PROPERTY name -> std::str {
          CREATE CONSTRAINT std::exclusive;
      };
      CREATE INDEX ON (.name);
  };
  CREATE TYPE default::Role {
      CREATE MULTI LINK permissions -> default::Permission;
      CREATE REQUIRED PROPERTY name -> std::str {
          CREATE CONSTRAINT std::exclusive;
      };
      CREATE INDEX ON (.name);
      CREATE MULTI LINK users -> default::User;
  };
  ALTER TYPE default::Permission {
      CREATE MULTI LINK roles -> default::Role;
  };
  ALTER TYPE default::User {
      CREATE LINK role -> default::Role {
          CREATE CONSTRAINT std::exclusive;
      };
      ALTER PROPERTY email {
          CREATE CONSTRAINT std::exclusive;
          CREATE CONSTRAINT std::max_len_value(254);
          CREATE CONSTRAINT std::min_len_value(5);
      };
      ALTER PROPERTY name {
          CREATE CONSTRAINT std::max_len_value(50);
          CREATE CONSTRAINT std::min_len_value(1);
      };
      ALTER PROPERTY password {
          CREATE CONSTRAINT std::max_len_value(20);
          CREATE CONSTRAINT std::min_len_value(8);
      };
  };
  ALTER TYPE default::UserSettings {
      ALTER LINK user {
          CREATE CONSTRAINT std::exclusive;
      };
  };
};
