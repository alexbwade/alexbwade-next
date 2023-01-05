CREATE MIGRATION m1bthdtethwvw77egjfmp63ksdjt4jit6xdb3rdqdbp7x4laela2dq
    ONTO m1kpdxuzawlkz4dqjcbkixu5pgsehuvle7mvdf6jhf2oeiavb4pboq
{
  ALTER TYPE default::User {
      ALTER LINK role {
          DROP CONSTRAINT std::exclusive;
      };
  };
};
