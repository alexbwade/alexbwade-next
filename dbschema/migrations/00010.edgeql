CREATE MIGRATION m1kpdxuzawlkz4dqjcbkixu5pgsehuvle7mvdf6jhf2oeiavb4pboq
    ONTO m1bgwqu365ea5iu6zzsicspzahpxewiaodty2klu4nd5yg34ar3h2a
{
  ALTER TYPE default::User {
      CREATE REQUIRED PROPERTY disabled -> std::bool {
          SET default := false;
      };
  };
  ALTER TYPE default::User {
      ALTER PROPERTY password {
          CREATE CONSTRAINT std::max_len_value(100);
      };
  };
  ALTER TYPE default::User {
      ALTER PROPERTY password {
          DROP CONSTRAINT std::max_len_value(20);
      };
  };
};
