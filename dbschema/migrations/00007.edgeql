CREATE MIGRATION m1kklbmgzftmbpih4rzwxywbt2iwlylvk2luvo6gqtyuzk7wnaj3jq
    ONTO m1mk5eu4yceo42blosg6fs45esbwf27dszyhiojdrtoqbipsefopza
{
  ALTER TYPE default::User {
      CREATE PROPERTY name := (((.first_name ++ ' ') ++ .last_name));
  };
};
