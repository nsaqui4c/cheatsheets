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

* Early and late binding
<img width="575" alt="image" src="https://github.com/user-attachments/assets/129f41aa-709b-4d58-9ccb-f45d437c3ba2" />
<img width="575" alt="image" src="https://github.com/user-attachments/assets/d533b1c9-180a-4c3f-90f1-2f4bf3d79e9c" />

*For early binding we have to use extra library, login to cloud and download file from your project*


# Advance messaging operation using Service.Execute
<img width="575" alt="image" src="https://github.com/user-attachments/assets/1a7bb59f-c536-4c8b-be83-148b5697dfb0" />
<img width="575" alt="image" src="https://github.com/user-attachments/assets/feb0219e-4e10-4cef-aee5-bcde0b4d8155" />

* there are some function predefined to us like Service.Create(). But we can use Execute to create function for all messages
<img width="575" alt="image" src="https://github.com/user-attachments/assets/266396cc-659f-4688-b23b-aefd3e497e59" />

<img width="575" alt="image" src="https://github.com/user-attachments/assets/e0b064f6-26be-49ae-a611-2f2a18edcf71" />

* Execute Multiple request -> similar to batch process -> minimizes the service call

<img width="575" alt="image" src="https://github.com/user-attachments/assets/4ddf100e-3197-40eb-b0ba-5fa9c5bb279e" />


----------------------------------------------------------------------------------------------------------------------
# Client Side


* to upload Js file -> go to your solution -> web resources -> new -> name it -> type js  -> write code and save
* to trigger -> go to entities -> contact -> forms -> open cintact -> form properties -> import saved js -> select trigger abd save

<img width="575" alt="image" src="https://github.com/user-attachments/assets/0d8cc0a7-13fd-436b-b9e3-70f75e168446" />


* Client API provides methods and object to apply to custom business logic using Javascript.
<img width="575" alt="image" src="https://github.com/user-attachments/assets/b43326cd-c22b-4cb3-a966-0c947a3a9dcd" />

<img width="575" alt="image" src="https://github.com/user-attachments/assets/c8a42fdb-a3c8-46ff-ac60-b71ac5cdc07e" />

*For every js function we have to excecution context as params.
* We get formContex from the execution context.
* Form Context has
  * Data Object -> formContext.data.entity.attributes
  * UI Object -> formContext.ui.controls

<img width="575" alt="image" src="https://github.com/user-attachments/assets/fae601bd-3fc3-4072-821e-1be542c2c589" />


* NameSpace
<img width="575" alt="image" src="https://github.com/user-attachments/assets/7e65d124-0813-45b9-bf8a-8d1ea396370d" />


* Notification
  
<img width="575" alt="image" src="https://github.com/user-attachments/assets/4d7a03b6-2771-42bc-89c8-d41bc0a3c1a5" />
<img width="575" alt="image" src="https://github.com/user-attachments/assets/b95d7b54-9a6c-4b7f-aefd-6fd1a80845af" />

* Preventing auto save for specific entities
<img width="575" alt="image" src="https://github.com/user-attachments/assets/0d5d7c0d-619f-45e0-9d25-4f543dd3ddc5" />


* Lookups
You have to find guid of atribute if is linked using foriegn key.
i.e it from different form but you are using in this form also.
Like in below eg. customerId is from Account, which is used in contact form

<img width="546" alt="image" src="https://github.com/user-attachments/assets/38670301-08da-445a-8202-ee953847f988" />



* Form Type
<img width="546" alt="image" src="https://github.com/user-attachments/assets/a6d7c847-2daf-4b63-aacc-eb402aedf47c" />

<img width="546" alt="image" src="https://github.com/user-attachments/assets/bc4f44d7-932d-4cbc-b98a-1d71361c789f" />



* Debuggin javascript -> developer -> sources -> ctrl+p -> filename
  


### HTML WebResource

<img width="546" alt="image" src="https://github.com/user-attachments/assets/a27d0db9-c6fd-4e70-a3bb-fc9842866fdf" />

To Create
* solution -> web resource -> name it -> paste code and save
* got to form -> insert -> select web resource -> save and publish

<img width="546" alt="image" src="https://github.com/user-attachments/assets/f08975d4-55c5-48cc-a7b8-6cb9f96a088a" />

<img width="546" alt="image" src="https://github.com/user-attachments/assets/71f0a452-439c-4aa6-81e8-3a590ab2e5fe" />





  
