module default {
  type User {
    required property email -> str {
      constraint exclusive; # must be unique
      constraint min_len_value(5);
      constraint max_len_value(254);
    };
    required property password -> str {
      constraint min_len_value(8);
      constraint max_len_value(20);
    };
    property name -> str {
      constraint min_len_value(1);
      constraint max_len_value(50);
    };
    link role -> Role {
      constraint exclusive; # can only have 1 role at a time
    };
    link settings -> UserSettings {
      constraint exclusive; # 1-to-1 relationship with settings
      on target delete allow;
    };
    index on (.email);
  }

  type UserSettings {
    required link user -> User {
      constraint exclusive; # 1-to-1 relationship with user
    };
    property salutation -> str; # example
  }

  type Role {
    required property name -> str {
      constraint exclusive; # must be unique in system
    };
    multi link users -> User;
    multi link permissions -> Permission;
    index on (.name);
  }

  type Permission {
    required property name -> str {
      constraint exclusive; # must be unique in system
    };
    multi link roles -> Role;
    index on (.name);
  }
}
