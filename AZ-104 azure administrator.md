===============================COURSE MATERIAL================================
https://github.com/MicrosoftLearning/AZ-104-MicrosoftAzureAdministrator/tree/master/Instructions/Labs
==============================================================================



Here are some official Microsoft websites that you really should bookmark when studying for the AZ-104 exam:

Learning paths on MS Learn:

https://docs.microsoft.com/en-us/learn/certifications/exams/az-104#two-ways-to-prepare

MS Learn

https://docs.microsoft.com/en-us/learn/browse/?roles=administrator&products=azure

Azure Code Samples

https://azure.microsoft.com/en-us/resources/samples/?sort=0

Official Azure Documentation

https://docs.microsoft.com/en-us/azure/

Official Microsoft Azure YouTube Channel

https://www.youtube.com/c/MicrosoftAzure

Official Microsoft Developer YouTube Channel

https://www.youtube.com/channel/UCsMica-v34Irf9KVTh6xx-g

Download the Azure SDK's for PowerShell and CLI

https://azure.microsoft.com/en-us/downloads/

Official Github Repository for PowerShell Scripts

https://github.com/Azure/azure-powershell

Azure REST API Browser

https://docs.microsoft.com/en-us/rest/api/?view=Azure



Microsoft Labs and Workshops - Practice is the key to success

Azure Citadel - Labs and Workshops

https://azurecitadel.com/

Microsoft Cloud Workshop - More labs and workshops

https://microsoftcloudworkshop.com/

GitHub AZ-104 from Microsoft Training

https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/



## Basic Introduction 
===============================================================================================================

![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/27d49197-44a1-4741-ac00-7b2348fb8b64)

===============================================================================================================

![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/0b79222a-2dee-4577-b0ed-5a39b858536e)


![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/18273742-c8a2-412d-a3cc-14473358e95b)


![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/42f4744e-81e6-409a-baed-5445910a50e7)


================================================================================================================================================
![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/2e60c8ea-bb97-46be-b745-3d37c914dc99)
![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/6a7b784f-1ffd-4111-a155-e5408f179e1f)
![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/2730dca7-d041-47d2-a244-bd521d879f29)

===================================================================================================================================================
![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/d9e811a5-217f-42de-93b9-3e5708c1bae7)
![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/125b9b28-2d49-44c1-8898-5661c587f4ac)
![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/310dadc1-555d-4ade-8d33-660a5e2c4661)
![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/44a561e3-217e-4d88-900b-45af70752f25)
![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/d2612248-04f8-4077-990e-862e3cc29921)
![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/f099a2c5-9ed8-4f69-97a4-577173c27fcb)
![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/37139998-6514-49c3-b38d-438969175712)

=====================================================================================================================================================
## Powershell and CLI
Powershell and cli has different syntax for command, but they all follow same pattern
### Powershell
* Get-AzVirtualNetwork
* New-AzVirtualNetwork
* Remove-AzVm
* Get-AzVm
* New-AzVm
* Remove-AzVm
* Get-AzVirtualNetworkSubnetConfig

### CLI
* az vm list
* az vm create
* az vm delete
* az network list
* az network vnet list
* az network vnet subnet list

#### chosing a subscription using CLI
![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/0267b1c2-e4ec-4bbb-b9c6-fc9dd0deee05)
===================================================================================================================================================
## Azure active directory
* Azure active directory in not duplicate of windows active directory
* It is use for identity and access management in cloud.
* It is a identity provider for the third party.
* employee can use their computer credential to log into third party which has integration with AD scuh as dropbox.
* We can use APIs to integrate custom software also.
* Recently Microsft put AD under Microsoft Entra Umbrella
* AD had free and paid plan. Paid plan is per user. So If we want 10 user to give extra functionality, we just have to pay for 10 user.
![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/85f735f6-91a3-4781-98a8-a43d49898a94)

**Check all the plans for the exam**

![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/e131a46d-e00d-41e4-9a82-7a20b139059a)
![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/858c334d-3cd9-4509-8b83-b6737d4645a9)
![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/e21bbe58-f948-43ef-a22c-68dbf5deab29)
![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/759255bc-d2c7-4a93-9db1-2eb1c5c05c35)

* To create and use Azure services, you first need to sign up [for an Azure account]. 
* An Azure tenant is a single dedicated and trusted instance of Azure AD. Each tenant (also called a directory) represents a single organization

* Azure tenant is a directory. Azure subscription is an object that represents a "folder" that you can put resources in. Subscriptions are tied to tenants. so 1 tenant can have many subscriptions, but not vice versa.
* Resources from one subscription are isolated from resources in other subscriptions
* An owner of a tenant can decide to have multiple subscriptions
* An identity is an object that can be authenticated. The identity can be a user with a username and password. Identities can also be applications or other servers that require authentication by using secret keys or certificates. Azure AD is the underlying product that provides the identity service.
* We can add custom domain, from Entra ID page, so that we can user email of that domain (naj.saq@capgemini.com)

### Creating user
* We can create new user on any tenant, and assign them roles, department, jobtitle from EntraID

### User Groups
* We can create groups in Entra ID and add users in the groups
* Group is just for dividing people. Adding people in group does not add any roles
* There are two ways we can add role to groups
  * assigned -> whatever role assigned to user will be there
  * dynamic -> add roles based on job title, surmname,department etc

### Administritive units
* It helps to restrict the access to certain administritive area that admin has created.
   * allows administrator user to affect only certain part of organization not the whole organization
* Steps:
   * create three teacher and three students and give teachers help desk access
   * now all teacher have access to all student password reset option
   * Create classroom1 administritive unit from Entra ID left panel
   * Assign role to this newly created admin unit as Password administrator and add teacher 1 to this.
   * Now we have classroom1 with teacher1 as password admin.
   * Add student1 as member of classroom1.
   * Now teacher1 can change account of student1 only
   * We can also add group instead of user, so that teacher1 can modify student grp, but cannot touch teacher group

### Devices
* we can define only devices which meets certain standard can access this application.
* We can also conditional access.
   * let say we have company device added here, and user is using company device then no issue
   * If user is using home device then enable MFA(Multi factor authentication)
     
### Bulk Operation
* we can add multiple user at once using CSV file
* Go to user -> bulk operation -> downlaod csv sample file -> fill data -> upload submit

### Externl User
* they need to invited rather created
* We can add roles and group
  ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/f24105a7-5c17-4a53-ac18-bc93ffcaa97e)
  ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/1a24446c-5252-449c-9ee1-44f0f4b83f68)


===============================================================================================================
## Role based access Control (RBAC)
* We can create roles and assign access to roles
* Example of roles:
  * Developer
  * Development manager
  * IT operation
  * Report reader
  * Global Admin
* We can assign one or more role to a user

![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/a168469c-76f7-4892-a377-1809989a8cc3)


**NOTE : Create storage account by enabling AD authorizatoin and diabling key based access to properly manage AD based authentication**
![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/b62d2174-41d2-419f-b34f-017fd78f3a8c)


===============================================================================================================
## Storage account
#### creating storage account
 ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/8137c32e-51a9-494e-bd4c-9c65078b89c2)
 ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/a16b4ede-7136-4cc2-a4bb-3ff06086cd80)
 * We have option to choose AD authoriation or key access while creating storage
  ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/e6db819f-3a4d-4804-af2b-391c95bcd82f)
 * By default storage account created with security key. Anybody who has this access key has admin accesss to storage
  ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/c8f68eee-0ded-4629-9abb-1e1d879504ce)

#### Assigning Permission to storage account
* Owner permission has access to give other user accesses, but it does not have read and write access to storage
 ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/e2ef5827-dfc2-4ba3-81e3-9d8c47d24819)

* Add role assignment to add files in storage
 ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/7528ea21-7ff9-4f10-b984-22abf50688c6)
 ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/4e0f023c-d369-4efc-8232-4393721a4b27)
* we can also give access from Access control(IAM) from left panel

#### Managing resource with role
* In storage account we can restrict certain type of user to specific files only
  *  once done selected user can access only specific folder in storage.
  * Create two container ->open one of them ->click on access control(left panel) -> select role->select member
    ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/18c2736d-9ba9-45cb-8795-31de3086cde0)
    ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/3aaf330e-3b09-4356-abed-a8cfdab58270)
    ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/803b7694-3b17-444a-aaef-2192c934e6ed)
    ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/0c970016-ddb9-488d-a9fe-c3224226980f)

#### Creting custom roles
* User needs to be premium (p1 or p2) level to get assigned custome role.
* To create custom role
   * go to subscription -> access control(IAM) -> create custom role
   * clone a role and then add or delete from the cloned role
   * Select Scope. By default it will be subscription level. We can select specifc resource if want to.
   * No we can assign this role to any user from subscription.
     ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/0e14d508-0295-4806-8df6-86a43daac528)
     ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/d71db277-fae0-4c14-b8d9-652db1472f7e)
     ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/b6220573-8796-4d42-869c-302124117b33)
     ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/82657351-5297-44ae-b448-1d274c587b27)

#### Resource group scope
* We can create multiple resource group and create resources under them
   * A tenant -> multiple subscription -> multiple resource grp -> multiple resource
* we can go to IAM in specific resource grp -> role assignment -> add new user with roles to that specific resource grp
* In the given case student has contributor access without delete for whole subscription
* Now we have given full contributor access to given resource grp
* Now for this RG, students will have full access
  * all the accesses merge themsleve.
![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/4081e20a-e30b-4ce5-8e07-aa9a948c5cef)
![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/8d2f0b7d-c266-4909-b77c-3955f7124c6b)
![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/f694e5a5-d5c4-41e9-af32-743b7684605d)

#### Interpret access assignment
* to check user access
  * entra ID -> users -> select User -> Azure role assignment
  ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/1ebd3824-1fd3-4274-a355-a7ba92817e98)

**NOTE:entra ID -> users -> select User -> Assigned roles  is for AD roles** 


===============================================================================================================
## Manage subscription and governance
* Subscription Dashboard
  * We can have multiple subscription in a tenant to manage different env, organization etc 
  * We can rename our subscription name
  * We can check the subscription plan
  * We can move subscription to different tenant
  ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/f9a04337-33d4-47f8-a2f0-7b92fbad8741)
* Cost management - There are 4 submenu in cost management
   * Cost analysis - We can see our current cost, estimated cost for month end, breakup- resource wise, location and resource grp wise
   * cost alert - We can see and add all the alerts. We can also anamoly alert, which triggers on any anamoly observes by Azure
   * budget - we can assign our budget and create alert based on it. alert can be set once any certain percentage of budget reached.
   * Advisor recommendation - Gives recommendation for cost management
 * Resource Lock
   * We can create lock on resource grp or resource
   * Only owner has access to delete the locks
   * Unless locks are deleted we cannot modify or delete resource.
     ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/e2c7c63f-e616-49ef-81bb-2da9d8eda57d)

* Azure Policy
  * Allows you to set rule that specify what is and is not allowed in your env.
     * All VM must have backup
     * VM should be B2 only
  * We can create our own policy using JSON format
  * We can select subscription and resource to implement the policy.
  * We can exclude any specific resource also.
  * Policy Enforcement :
    * We can outright deny creation of any resource which doesnot meet the policy
    * Or we can allow resource to be created, but the resource will be in non-compliant report
  * It will only affect those resource which are created after policy, but older resource will be in report.
  ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/f0cd6a57-c509-4c3a-b763-68df8197c23d)

* Apply and manage tags in resource
  * We have tags option in left tab in any resource.
  * We can add ksy value pair there (env: dev)
  * Tags are used other management tools such as cost analysis

* Move resource
  * We can move resource from one resource grp to another and one subscription to another or to another region
  * Moving them to other resource grp or subscription will change its resource id

* Subscription and management group
  * Management group is to manage multiple subscription
  * We get all the bill on subscription, so it is logical to create separate subscription for different organization and department
  * We use management grp to organize similar subscription
    


===============================================================================================================




===============================================================================================================




===============================================================================================================




===============================================================================================================




===============================================================================================================




===============================================================================================================




===============================================================================================================




===============================================================================================================




===============================================================================================================




===============================================================================================================
