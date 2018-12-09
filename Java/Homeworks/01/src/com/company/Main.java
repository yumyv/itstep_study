package com.company;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
import java.util.Scanner;

public class Main {

    private static Scanner sc = new Scanner(System.in);
    private static List<String> listOfNames = new LinkedList<>(Arrays.asList());

    public static void main(String[] args) {

        while (true) {
            System.out.println("1 - add user");
            System.out.println("2 - delete user by number");
            System.out.println("3 - delete user by name");
            System.out.println("4 - show list");

            int choice = Integer.parseInt(sc.nextLine());

            switch (choice) {
                case 1:
                    addUser();
                    break;
                case 2:
                    deleteUserByIndex();
                    break;
                case 3:
                    deleteUserByName();
                    break;
                case 4:
                    showList();
                    break;
            }
        }
    }

    private static void showList() {
        for (String i: listOfNames) {
            System.out.println("№ " + listOfNames.indexOf(i) + " - " + i + "\n");
        }
    }

    private static void deleteUserByName() {
        System.out.println("Enter the name: ");
        String inputValue = sc.nextLine();
        for (int i = 0; i < listOfNames.size(); i++) {
            if (listOfNames.get(i).equalsIgnoreCase(inputValue)) {
               listOfNames.remove(i);
            }
        }
    }

    private static void deleteUserByIndex() {
        System.out.println("Enter the number of user: ");
        String inputValue = sc.nextLine();
        int result = Integer.parseInt(inputValue);
        if (result < listOfNames.size()-1) {
            listOfNames.remove(result);
        } else {
            System.out.println("Un correct number, user undefined");
        }
    }

    private static void addUser() {
        System.out.println("Enter the name: ");
        String result = sc.nextLine();
        listOfNames.add(result);
    }
}
