package com.theironyard.utils;

import com.theironyard.entities.Client;
import com.theironyard.entities.FileUpload;
import com.theironyard.entities.Provider;
import com.theironyard.entities.Task;

import javax.persistence.Column;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Caroline on 4/13/16.
 */
public class ObjectUpdateUtils {

    public static Client updateClientObject(Client client, Client updates) {

        String newfirstName = updates.getFirstName();
        String newLastName = updates.getLastName();
        String newEmail = updates.getEmail();
        String newPhoneNumber = updates.getPhoneNumber();
        List<Task> newTasks = updates.getTasks();

        if (!StringUtils.isEmptyOrNull(newfirstName)) {
            client.setFirstName(newfirstName);
        }
        if (!StringUtils.isEmptyOrNull(newLastName)) {
            client.setLastName(newLastName);
        }
        if (!StringUtils.isEmptyOrNull(newEmail)) {
            client.setEmail(newEmail);
        }
        if (!StringUtils.isEmptyOrNull(newPhoneNumber)) {
            client.setPhoneNumber(newPhoneNumber);
        }
        client.setTasks(newTasks);


        return client;

    }

    public static Provider updateProviderObject(Provider provider, Provider updates) {

        String newfirstName = updates.getFirstName();
        String newLastName = updates.getLastName();
        String newEmail = updates.getEmail();
        String newPhoneNumber = updates.getPhoneNumber();
        String newAbout = updates.getAbout();
        String newSpecialties = updates.getSpecialties();

        if (!StringUtils.isEmptyOrNull(newfirstName)) {
            provider.setFirstName(newfirstName);
        }
        if (!StringUtils.isEmptyOrNull(newLastName)) {
            provider.setLastName(newLastName);
        }
        if (!StringUtils.isEmptyOrNull(newEmail)) {
            provider.setEmail(newEmail);
        }
        if (!StringUtils.isEmptyOrNull(newPhoneNumber)) {
            provider.setPhoneNumber(newPhoneNumber);
        }
        if (!StringUtils.isEmptyOrNull(newAbout)) {
            provider.setAbout(newAbout);
        }
        if (!StringUtils.isEmptyOrNull(newSpecialties)) {
            provider.setSpecialties(newSpecialties);
        }

        return provider;

    }

//    public static FileUpload updateFileUploadObject(FileUpload fileUpload, FileUpload updates) {
//
//        String newFileName = updates.getFileName();
//        String newOriginalFileName = updates.getOriginalFileName();
//        Provider newProvider = updates.getProvider();
//        Client newClient = updates.getClient();
//
//
//        if (!StringUtils.isEmptyOrNull(newFileName)) {
//            fileUpload.setFileName(newFileName);
//        }
//        if (!StringUtils.isEmptyOrNull(newOriginalFileName)) {
//            fileUpload.setOriginalFileName(newOriginalFileName);
//        }
//        if (newProvider != null) {
//            fileUpload.setProvider(newProvider);
//        }
//        if (newClient != null) {
//            fileUpload.setClient(newClient);
//        }
//
//        return fileUpload;
//
//    }
}

