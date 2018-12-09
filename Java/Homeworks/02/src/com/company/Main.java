package com.company;

import com.company.entities.User;

import java.util.Scanner;

public class Main {

    public static Scanner sc = new Scanner(System.in);

    public static void main(String[] args) {

        User user = new User();

        while (true) {
            System.out.println("1 - add user");
            System.out.println("2 - delete user by number");
            System.out.println("3 - delete user by name");
            System.out.println("4 - show list");

            int choice = Integer.parseInt(sc.nextLine());

            switch (choice) {
                case 1:
                    user.addUser();
                    break;
                case 2:
                    user.deleteUserByIndex();
                    break;
                case 3:
                    user.deleteUserByName();
                    break;
                case 4:
                    user.showList();
                    break;
            }
        }
    }
}
