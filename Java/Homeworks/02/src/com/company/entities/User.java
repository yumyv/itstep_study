package com.company.entities;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

import static com.company.Main.sc;

public class User {

    private List<String> users = new LinkedList<>(Arrays.asList());

    public void showList() {
        for (String i: users) {
            System.out.println("№ " + users.indexOf(i) + " - " + i + "\n");
        }
    }

    public void deleteUserByName(String name) {
        System.out.println("Enter the name: ");
        for (int i = 0; i < users.size(); i++) {
            if (users.get(i).equalsIgnoreCase(name)) {
                users.remove(i);
            }
        }
    }

    public void deleteUserByIndex(String id) {
        System.out.println("Enter the number of user: ");
        int result = Integer.parseInt(id);
        if (result < users.size()) {
            users.remove(result);
        } else {
            System.out.println("Un correct number, user undefined");
        }
    }

    public void addUser(String name) {
        System.out.println("Enter the name: ");
        users.add(name);
    }
}
