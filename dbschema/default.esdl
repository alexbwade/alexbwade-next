module default {
  abstract type Auditable {
    annotation description := "Add 'created_at' and 'updated_at' properties.";
    property created_at -> datetime {
      readonly := true;
      default := datetime_current();
    }
    property updated_at -> datetime {
      default := datetime_current();
    }
  }

  abstract type Named {
    annotation description := "Add required unique 'name' property.";
    required property name -> str {
      constraint exclusive; # must be unique in system
      constraint min_len_value(1);
      constraint max_len_value(50);
    }
  }

  type User extending Auditable {
    required property email -> str {
      constraint exclusive; # must be unique in system
      constraint min_len_value(5);
      constraint max_len_value(254);
    };
    required property password -> str {
      constraint min_len_value(8);
      constraint max_len_value(100);
    };
    required property first_name -> str {
      constraint max_len_value(50);
      default := '';
    };
    required property last_name -> str {
      constraint max_len_value(50);
      default := '';
    };
    required property disabled -> bool {
      default := false;
    };
    property name := str_trim(.first_name ++ ' ' ++ .last_name);
    link role -> Role;
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

  type Role extending Named {
    multi link users -> User;
    multi link permissions -> Permission;
    index on (.name);
  }

  type Permission extending Named {
    multi link roles -> Role;
    index on (.name);
  }
}
