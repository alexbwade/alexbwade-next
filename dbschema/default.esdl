module default {
  type User {
    required property email -> str {
      constraint exclusive;
      constraint min_len_value(8);
      constraint max_len_value(30);
      constraint regexp(r'^[A-Za-z0-9 ]+$'); # figure this out
    };
    required property password -> str;
    required link role -> Role {
      constraint exclusive;
      default := (SELECT Role FILTER .name = 'user');
    };
    property name -> str;
    link settings -> UserSettings {
      constraint exclusive;
      on target delete allow;
    };
    index on (.email);
  }

  type UserSettings {
    required link user -> User;
    property salutation -> str; # example
  }

  type Role {
    required property name -> str {
      constraint exclusive;
    };
    multi link users -> User;
    multi link permissions -> Permission;
    index on (.name);
  }

  type Permission {
    required property name -> str {
      constraint exclusive;
    };
    multi link roles -> Role;
    index on (.name);
  }
}
