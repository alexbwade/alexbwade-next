CREATE MIGRATION m1mk5eu4yceo42blosg6fs45esbwf27dszyhiojdrtoqbipsefopza
    ONTO m13omxguk2jiolwepvsqar3o5guvhwjdmuevca6vnb2pacrxir2swq
{
  ALTER TYPE default::Auditable {
      CREATE PROPERTY updated_at -> std::datetime {
          SET default := (std::datetime_current());
      };
  };
};
