package com.vipun.basicCRUD.service;

import com.vipun.basicCRUD.entity.Customer;
import com.vipun.basicCRUD.repository.CustomerRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomerService {


    private final CustomerRepo customerRepo;

    public Customer postCustomer(Customer customer){
        return customerRepo.save(customer);
    }

    public List<Customer> getAllCustomer(){
        return customerRepo.findAll();
    }

    public Customer getCustomerById(Long id){
        return customerRepo.findById(id).orElse(null);
    }

    public Customer updateCustomer(Customer customer){
        return customerRepo.save(customer);
    }

    public void deleteCustomer(Long id){
        customerRepo.deleteById(id);
    }
}
