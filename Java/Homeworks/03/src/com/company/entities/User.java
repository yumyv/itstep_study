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

    public void deleteUserByName() {
        System.out.println("Enter the name: ");
        String inputValue = sc.nextLine();
        for (int i = 0; i < users.size(); i++) {
            if (users.get(i).equalsIgnoreCase(inputValue)) {
                users.remove(i);
            }
        }
    }

    public void deleteUserByIndex() {
        System.out.println("Enter the number of user: ");
        String inputValue = sc.nextLine();
        int result = Integer.parseInt(inputValue);
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
