CREATE MIGRATION m1omqaiiu5p7izsprdtszdf3gehytc4anna374eg5csvf4zsjfckha
    ONTO initial
{
  CREATE FUTURE nonrecursive_access_policies;
  CREATE TYPE default::Person {
      CREATE REQUIRED PROPERTY email -> std::str;
      CREATE REQUIRED PROPERTY name -> std::str;
      CREATE REQUIRED PROPERTY password -> std::str;
  };
};
