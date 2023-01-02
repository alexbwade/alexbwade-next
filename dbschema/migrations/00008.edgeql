CREATE MIGRATION m1qvqjgtvvnr44qu3t4x5pdeyx35noogfa4eo37nqovknmcknngmea
    ONTO m1kklbmgzftmbpih4rzwxywbt2iwlylvk2luvo6gqtyuzk7wnaj3jq
{
  ALTER TYPE default::User {
      ALTER PROPERTY first_name {
          SET default := '';
          DROP CONSTRAINT std::min_len_value(1);
      };
  };
  ALTER TYPE default::User {
      ALTER PROPERTY last_name {
          SET default := '';
          DROP CONSTRAINT std::min_len_value(1);
      };
  };
  ALTER TYPE default::User {
      ALTER PROPERTY name {
          USING (std::str_trim(((.first_name ++ ' ') ++ .last_name)));
      };
  };
};
