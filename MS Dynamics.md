## Architecture
* component with gear Icon are extendable (custom code can be written)
![image](https://github.com/user-attachments/assets/df356f7e-61c0-4314-a70c-b44381c0b72d)


* Discovery Service and Organization Service
![image](https://github.com/user-attachments/assets/aa2e47d7-b534-43ef-a8a3-00c1b6d66027)

![image](https://github.com/user-attachments/assets/6180e2df-a759-449e-8caf-e5eb9cfcaa6a)

* All the end points are available at Setting-> customization -> Developer Resource
  <img width="477" alt="image" src="https://github.com/user-attachments/assets/80675b43-15f9-42e8-919c-df4a9ddab400" />


# Plugin Development pipeline
<img width="543" alt="image" src="https://github.com/user-attachments/assets/4ae93948-b8fc-4877-a60e-0b82d61c4fc6" />

* while writing plugin we have to use interface provided my microsoft
* There are two things
  * contex
  * Entity - it is something to which we have attached the plugin. like contact form

* while getting entity attribute we need to use logical name instead of display name
  * to get logical name ->setting -> customization -> cutomize the system -> component->entities-> contact->field -> first column
<img width="543" alt="image" src="https://github.com/user-attachments/assets/22d991ff-bae1-46fc-a57a-8bc9254b4895" />

* We can also use metaData extension to get logical name
<img width="543" alt="image" src="https://github.com/user-attachments/assets/8f983eae-3d01-464b-8e19-8cb3b012563c" />

* always check if entity atribute is present before using
<img width="543" alt="image" src="https://github.com/user-attachments/assets/9534a2c0-8e82-4e8c-92e3-b5b5e239674a" />
<img width="543" alt="image" src="https://github.com/user-attachments/assets/0cbc04fb-de07-467a-9f92-4e7f71913be7" />


* There are multiple ways of data retreival using sdk query class
<img width="543" alt="image" src="https://github.com/user-attachments/assets/fa176860-ec04-43b2-be7e-2f89c8922d6b" />
<img width="543" alt="image" src="https://github.com/user-attachments/assets/3039f84f-fd22-4689-aa6c-a7a2c60d1295" />


```
QueryExpression query = new QueryExpression("contact");
query.ColumnSet = new Columnset(true); // for all columns
query.ColumnSet = new Columnset(new String []{"emailaddress1","firstName"});
query.Criteria.AddCondition("emailaddress1",ConditionalOperator.Equal,email);
Entity Collection = service.RetrieveMultiple(query);
```
# Pre and post entity Images (snapshot)
<img width="543" alt="image" src="https://github.com/user-attachments/assets/d71f6ff0-da3b-4278-994d-50a557ab9539" />

* While deploying the plugin create new Image (pre-image) and give same name as you have mentioned in code and also, attributes that you want to save
<img width="543" alt="image" src="https://github.com/user-attachments/assets/7ef1aa96-92d2-40ca-908b-d84fea8ff259" />

* In code use same name to get snapshot
<img width="543" alt="image" src="https://github.com/user-attachments/assets/b16c5d4b-9112-4bbb-83a2-f67a6186e725" />

# Impersonation in plugin
* We can run the whole plugin with adminDelegation or other user
  * add step to run as admin
<img width="543" alt="image" src="https://github.com/user-attachments/assets/20c03ce3-6365-41b2-b347-3e5aee2064e1" />

* We can run specific part of plugin with other user
<img width="543" alt="image" src="https://github.com/user-attachments/assets/7638dcd8-f858-4ecd-938f-3a2399de409b" />
<img width="543" alt="image" src="https://github.com/user-attachments/assets/bae8c5a7-6df1-4178-a7fe-0af42dc113b1" />

# Pass data between Plugins
<img width="543" alt="image" src="https://github.com/user-attachments/assets/416b5771-e3a0-4d17-9c0b-98388f61391a" />

<img width="543" alt="image" src="https://github.com/user-attachments/assets/4883aa73-699c-41ff-a287-a8e7160c7d79" />

# context depth
We can check how many times plugin as cause to re-run the same code again
<img width="543" alt="image" src="https://github.com/user-attachments/assets/8652c8dc-acec-4fd0-986a-a29a408bbcf1" />

# Plugin deployment Isolation mode
<img width="543" alt="image" src="https://github.com/user-attachments/assets/2109d9df-a7a1-4600-b5b9-568451413cbf" />


# Debugging
<img width="543" alt="image" src="https://github.com/user-attachments/assets/6729912f-f994-4b0f-9733-1aeb37005a83" />




