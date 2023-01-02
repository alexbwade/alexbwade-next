CREATE MIGRATION m1bgwqu365ea5iu6zzsicspzahpxewiaodty2klu4nd5yg34ar3h2a
    ONTO m1qvqjgtvvnr44qu3t4x5pdeyx35noogfa4eo37nqovknmcknngmea
{
  ALTER TYPE default::User {
      ALTER PROPERTY first_name {
          SET REQUIRED USING ('');
      };
  };
  ALTER TYPE default::User {
      ALTER PROPERTY last_name {
          SET REQUIRED USING ('');
      };
  };
};
