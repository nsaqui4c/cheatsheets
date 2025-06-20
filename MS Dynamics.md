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

* Query by attribute
<img width="543" alt="image" src="https://github.com/user-attachments/assets/4f84aedf-3e6e-4a9f-8001-e7e02dcbf3c7" />


```
QueryExpression query = new QueryExpression("contact");
query.ColumnSet = new Columnset(true); // for all columns
query.ColumnSet = new Columnset(new String []{"emailaddress1","firstName"});
query.Criteria.AddCondition("emailaddress1",ConditionalOperator.Equal,email);
Entity Collection = service.RetrieveMultiple(query);
```
* Query by Fetch XML
* Go to filter -> select what you are looking for -> details to add condition -> Download fetch XML
<img width="575" alt="image" src="https://github.com/user-attachments/assets/5a19647d-bcd1-4996-8b9a-5b2facde7f8a" />
<img width="575" alt="image" src="https://github.com/user-attachments/assets/73e4090a-5c64-4090-9bde-2abc665da95b" />
<img width="575" alt="image" src="https://github.com/user-attachments/assets/67c2ba11-a967-4e03-883f-651023404b87" />


* Aggregate with Fetch XML
  * sum avg min max count(*)
  * look for document for detail


<img width="575" alt="image" src="https://github.com/user-attachments/assets/4bf1aa92-38f5-4c87-ae3b-7654d55ba57c" />


* Qury using LINQ

<img width="575" alt="image" src="https://github.com/user-attachments/assets/201043de-422c-49da-9192-f8864f8152d4" />
<img width="575" alt="image" src="https://github.com/user-attachments/assets/f1c7252a-10e6-475e-a084-08dd27676996" />
<img width="575" alt="image" src="https://github.com/user-attachments/assets/8b099c03-9280-4e63-9f76-9eee9058be35" />








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
* In cloud we only have partial trust (sandbox)
<img width="543" alt="image" src="https://github.com/user-attachments/assets/2109d9df-a7a1-4600-b5b9-568451413cbf" />

# Configuration data
* We can save two env data
<img width="543" alt="image" src="https://github.com/user-attachments/assets/45236280-081f-4286-8c8f-5c9d669b8dce" />
* then create constructor to get the data
<img width="543" alt="image" src="https://github.com/user-attachments/assets/7382d9b3-95c1-4405-9308-a01478a378b3" />


# Plugin Debugging
<img width="543" alt="image" src="https://github.com/user-attachments/assets/6729912f-f994-4b0f-9733-1aeb37005a83" />



# Custom work flow
* We can run workflow on demand also
<img width="543" alt="image" src="https://github.com/user-attachments/assets/fb9f7c2d-8a4d-4b00-b128-0134c19d144c" />
<img width="543" alt="image" src="https://github.com/user-attachments/assets/8eed6c8a-5b63-4a5a-88f3-c8b513f13b52" />

* You can monitor it by going to setting
<img width="543" alt="image" src="https://github.com/user-attachments/assets/6de42861-21fb-40b3-ae13-08fe9c4a164a" />







## Difference between plugin and custom work flow
<img width="543" alt="image" src="https://github.com/user-attachments/assets/13b49010-cd04-4bce-b15d-de0c33a7ac94" />


# Console App Integration
<img width="543" alt="image" src="https://github.com/user-attachments/assets/1e190946-29c1-4a0c-a49c-d2a16c2fd141" />


