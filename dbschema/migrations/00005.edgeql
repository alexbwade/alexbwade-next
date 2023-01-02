CREATE MIGRATION m13omxguk2jiolwepvsqar3o5guvhwjdmuevca6vnb2pacrxir2swq
    ONTO m1b2vopzsgkjgqbpybpfeeecwhbr3rsidqdqpswn7uslaap72fv6aq
{
  CREATE ABSTRACT TYPE default::Auditable {
      CREATE ANNOTATION std::description := "Add 'created_at' and 'updated_at' properties.";
      CREATE PROPERTY created_at -> std::datetime {
          SET default := (std::datetime_current());
          SET readonly := true;
      };
  };
  ALTER TYPE default::User {
      ALTER PROPERTY name {
          RENAME TO first_name;
      };
      EXTENDING default::Auditable LAST;
  };
  CREATE ABSTRACT TYPE default::Named {
      CREATE REQUIRED PROPERTY name -> std::str {
          CREATE CONSTRAINT std::exclusive;
          CREATE CONSTRAINT std::max_len_value(50);
          CREATE CONSTRAINT std::min_len_value(1);
      };
      CREATE ANNOTATION std::description := "Add required unique 'name' property.";
  };
  ALTER TYPE default::Permission EXTENDING default::Named LAST;
  ALTER TYPE default::Permission {
      ALTER PROPERTY name {
          ALTER CONSTRAINT std::exclusive {
              DROP OWNED;
          };
      };
  };
  ALTER TYPE default::Role EXTENDING default::Named LAST;
  ALTER TYPE default::Role {
      ALTER PROPERTY name {
          ALTER CONSTRAINT std::exclusive {
              DROP OWNED;
          };
      };
  };
  ALTER TYPE default::Permission {
      ALTER PROPERTY name {
          RESET OPTIONALITY;
      };
  };
  ALTER TYPE default::Role {
      ALTER PROPERTY name {
          RESET OPTIONALITY;
      };
  };
  ALTER TYPE default::Permission {
      ALTER PROPERTY name {
          DROP OWNED;
          RESET TYPE;
      };
  };
  ALTER TYPE default::Role {
      ALTER PROPERTY name {
          DROP OWNED;
          RESET TYPE;
      };
  };
  ALTER TYPE default::User {
      CREATE PROPERTY last_name -> std::str {
          CREATE CONSTRAINT std::max_len_value(50);
          CREATE CONSTRAINT std::min_len_value(1);
      };
  };
};
