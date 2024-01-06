===============================COURSE MATERIAL================================
https://github.com/MicrosoftLearning/AZ-104-MicrosoftAzureAdministrator/tree/master/Instructions/Labs
==============================================================================


===============================QUICK START TEMPLATE================================
https://github.com/Azure/azure-quickstart-templates
==============================================================================


## Powershell Command
* Connect-AzAccount
* New-AzResourceGroup -Name myrg -Locatoin EastUS
* New-AzVm -Name azVm123345 -ResourceGroup myrg -Location EastUS
* Invoke-AzVMRunCommand -ResourceGroupName 'myrg' -VMName 'azVm123345' -CommandId 'RunPowerShellScript' ScriptString 'Install-WindowsFeature -Name WebServer -IncludeManagementTools'
* Stop-AzVM -ResourceGroupName 'myrg' -VMName 'azVm123345'
* Start-AzVM -ResourceGroupName 'myrg' -VMName 'azVm123345'
* Remove-AzVm -ResourceGroupName 'myrg' -VMName 'azVm123345'
* Remove-AzResourceGroup -Name 'myrg'
=================================================
 
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
## Storage account
* Storage account name should be unique throught Azure.
* LRS - replicates your storage account three times within a single data center in the primary region
* ZRS - replicates your storage account synchronously across three Azure availability zones in the primary region
* GRS - copies your data synchronously three times in two region, 100 miles away from each other.
* GZRS - combination of GRS and ZRS. two different region with physical separation of 3 copies in different zones.

  ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/4cd03ff8-89aa-4df1-8a72-60ef34e2bef9)
  ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/0d52e23f-da53-462d-87d0-2aa2bb6bb2ee)
  ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/cd512ce9-987b-4bbe-9e99-fe70ffb8c376)

* While creating there is option for read only access in case of regional availability
  * these will give you url for read only in case of unavailability of primary region.
  * available for GRS and GZRS


* Networking
  * We have option to make accessible from all internet
  * selected IP
  * Private access
* Network Routing
  * Microsoft Network Routing - make sure that you are inside azure as long possible
  * Internet routing - traffic will exit routing as soon we call for external resource.
  * eg. user in japan ask for storage item in US
    * MS network - data will travel in azure till it reaches japan and then exit to internet
    * Internet routing - traffic will exit in US and travel to japan in public internet.
  ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/759c34d2-0ea2-4902-81f9-e79d598e7bc8)

* Data protection
  * Recovery - protect your data from erroneous deltion and modification
    * Soft delete for files share, blobs and container. Helps you recover item in given time after deletion
    * Point-in-time restore - create backup image of current status and you can restore to that status.
  * Tracking
    * enabling versioning for blobs - Manage version and keep track changes in blob data
    * enable blob change feed - create logs for changes
  * Access control
    * Allows you to set time-based retention policy on the account-level that will apply to all blob versions.
    * Data cannot be deleted for given time
    * for governance and audit purpose for logs etc

 * Encryption
   * All file are encrypted by default
   * We have option to either MS to manage keys or we can manage encryption keys.
   * We can also choose to have second layer of encryption - hardware layer encryption
   ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/95adfffe-a984-422f-bfee-efb981e7cf82)

* We have 4 different storage types present
  * Blobs - for any files and images etc
  * file share - SMB drive to share your file among Vms
  * Queue - are like messaging service between 2 apps. anyone can add and read messages in queue
  * Table - Storing data in semi structured manner in storage account.

* Blob Storage
  * We can see the URL of any file from its properties
  * The file or folder are not directly accessible using URL. We need SAS(shared access signature) or SHA key
  * We can set new key autumatically after specific time using 'set rotation reminder'
  * We can generate SAS with certain permission. SAS is a key signed using SHA key for selected resource
 
  ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/6a963d45-a7b5-442c-940d-0f42ac7cdd29)
  ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/d99f95d7-7aa9-456e-ad01-bc1e43a79ea2)
  ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/aa761caa-7ef0-43e5-8b1d-c2a69dd7b12b)


* Stored access policies
  * Kind of condition on SAS, so that we can revoke permissions
  * We have to create access policy first and then while creating SAS we can select the policy as condition on SAS
  * Now if we delete access policy, then generated SAS will be invalidated.
  ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/b8354165-3dba-4dcf-93be-16b8725ba9d0)

  ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/06fa990e-ef3a-4915-a24d-16913ea056cb)

* Redundant storage
  * We can change redundancy plan from configuration setting in storage resource.
  * We can get read url of secondary region from Endpoints
  * We can see the secondary region from geo-replication(Redundancy now) menu
  * In case of emergency, we can choose our secondary region from Redundancy-> fail over
  ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/c7d0f1d4-3bc9-4bda-a7cb-954ded79c908)

* Access Tier
  * Hot - frequently access data lower access code higher storage cost
  * Cool - Infrequently access data - higher access cost lower storage cost
  * We can change it from configuration setting even after creation of storage
  * We have other Tier also, which we can assign to specific file, by clicking on change tier in three dots
    ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/342f41b1-c0c7-40af-bcde-cc86257a726d)
  * There are minimum storage time for cool,cold and archive. Even if we delete file, we will be billed for 30 days
  * Making file archive, will takedown file from internet, restoring will may take several hours


* Azure AD access control for storage
  * We can provide storage access to AD users, using Access control(IAM) 
  ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/1b984693-f711-4990-b020-f1abda6f55f2)

* Soft delete Restore
  * We can enable soft delete restore.
  * Once it is available we can restore file
  ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/b615ee70-709a-46e7-a1de-3b5a7c3466a2)

* Snapshot and backup
  * we can create daily backup. backup are saved for specific time
  * We have manually create snapshot. Once created, it will be available till deleted.
    * snapshot can have all the file present at that time
    * we will also have url of snapshot files

* Versioning of blobs
  * We can go to Data protection tab after creattion of storage to enable versioning.
  * We can go to Lifecycle management tab -> Add rule ->  move to cold storage/delete file after x days

* Monitoring
  * Insight - Errors, authorization error, performance, Availability, capacity
  * Alert - you can alert for specific used capacity, availability issue etc
  * Metrics - way of creating your own graph
  * Workbook - temaplate for dashboard
  * Diagnostic  - Specifies list of categories that you want logs to collect metric for-(read,write,delete, transaction metric)
  * Logs - we can query logs from here

* Lifecycle Management
  * Automatically move files from one access tier to another based on rule you have created
  ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/39065875-97df-4def-be88-3dcb6e9714d8)
  ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/059b1a75-e780-4271-b8db-11c4c1410222)
  ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/03f058f7-2e0b-46fc-8fee-6174441c36c6)

* Moving Large files using Azure Data Disk
  * We can ask for disk from MS, we have fill the disk and send them back with courier
  * Data box requires certain type of subscription.
  * We can use Import/Export job in pay as you go subscription.
     * In this we have to send our own disk to upload data in Azure storage

![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/41de6d24-63e9-448b-8013-9ed3acbdc176)
![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/37f297ba-c007-4901-8b71-b7c113a898fa)
![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/ad93495a-4b8f-4ea0-bc3b-3a14d69dfd32)
![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/e42f6b85-b9fd-4559-be49-f939d05eb79c)
![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/6967c494-2c67-4ffe-986d-f55f3fa5ad3b)


* Copy File with Az Copy
  * Command line tool to tranfer file from one storage account to another
  * We can dowlnload tool from internet
  * azcopy < source url with SAS > < Destination URL with SAS >

* Storage Browser
  * We can manage storage data from here
  * We have also storage explorer which downloadable app version for Storage browser
  ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/a3826bd5-c349-4c94-91e3-739b89da9d7c)

* Object Replication
  * copy blobs asynchronoulsy from source storage account to destination account
    ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/27ee2d29-2d2a-4bd7-b6f1-2dbb4ba9ad3d)

#### Azure File share
* We have special option for file share in premium disk
* for standard storage we can create file share from left panel
* We can see that premium file share is blocked, because we have created standard storage.
* We can create backup also while creating file share
* File share support SMB protocal and has real hierarichal (folder) structure.
* We can connect all over VM to this SMB, so that all of them can access this same drive to share file


![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/ba8d2cf3-2214-4d34-b3c1-076a2f457270)
![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/825fa35e-e97c-4ff1-a697-da038eacfde6)
![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/a7b630e3-8d30-48d1-9567-84322a99758f)
![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/0bf61fba-9d9b-4093-9fde-d72bcfcd9d77)

#### Azure File sync
* Helps you to sync your file from your local windows server to azure file share
* Once creates we can download application(Azure file sync agent), which we need to install in local server and setup our sync.
* once setup all of local server and azure file share will have latest data from all other server.

#### Premium storage
* while creating premium storage we get one more option to select the type of storage
* We have only LRS and ZRS in premium storage.
  ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/62e46c2d-e943-4cde-8ba2-ad06bc1ffa5d)
  ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/9a9f6f3b-6d48-4e87-a35b-d669aca93926)




===============================================================================================================
## Azure VM


#### Networking
* Every VM must belong to one Virtual network.
* Subnet - we need to define subnet for our Virtual network. It defines total number of Ips this VN has.
* We can assign public IP to VM also, if we want to access this VM from Internet


#### Management
* Microsoft Defender for cloud - security management and threat protection using azure basic free plan.
* System assigned managed Identity - give identity to VM to assign and role to VM
* Login with azure AD - RBAC role assignment
* Auto shutdown - shutdown at specific time (no charges when VM is shut down)
* backup
* Site recovery - disaster recovery - enable sync with another cold site

#### Monitoring
* We cab enable recommneded alert rules (disk size, network traffic in and out etc). Every alert has some cost

### Advanced
* We can select an extension to install (backups agents, monitoring agents) 


* Once VM is up we can run command also to make changes inside the VM
  * Using powershell - connect to Azure and run Invoke command
  * DIrectly from Azure portal using "Run Command" deom left panel
* If we stop VM it get deallocated, hence we lose the IP.
* We have option to stop without deallocation, this will keep the IP, but we will be charged even when VM is stopped
#### VM Availability
* We can set to replicate our VM in case of any disaster to recover from there.
* Availability zone - Physically separate resource with Azure region
  ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/05624e38-4cce-41c1-ba13-54cc9f3c74e5)

* Virtual Machine scale set - Distribute VMs across zones and fault donains at scale
* Availability set - Group two or more VMs in an availability set to ensure that at least one is available during planned or unplanned maintenance events
  * We have to create availability set of 2 or more VMs to ensure atleast one is available.
  * We can create availability set basis on two things
    * Fault domain - VM in same fault domain share same power source and physical network switch - we can create multiple fault domain to separate VMs
    * Update Domain - Virtual machines in the same update domain will be restarted together during planned maintenance.
  ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/85336e15-3f11-4000-a49c-656371f083a7)


**We need to add Load Balancer manually in case of Availabiltiy zone and availability set**

#### Resizing Azure VM
![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/155fd798-d05b-41b4-857d-2af4f5839abd)


#### Attaching additional disk
* We can attach and remove disks from VM.
* We can attach same disk to another VM to transfer data
* Disk can be attached to single VM at a time.
![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/4777085b-9b03-4367-9b24-08885a0e608a)


#### Azure Bastion services
* Most secure option to connect to our VM. We do not need to have public IP and port open to connect
* We  have to create Bastion server with it own IP, and it will connect to your machine

#### Virtual machine scale set (VMSS)
* We can create VMSS from resources. This will create VM and scale them according to rule we define.
* We can select multiple availability zone for redundancy
* We have scaling policy here to select minimum and maximum VM to scale
* We can define scale out and scale-in threshold to scale (max and min cpu utilization)


#### Creating custom VM image
* Create a VM using base image provided by azure.
* We need to generalize the VM by running Sysrep in windows serve. Once generalize, we cannot start this VM.
* Now we have to click on capture in Azure VM page
* Now we can see newly created image in browse all item -> My items in image page

![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/436ec47e-8675-4df1-bc4b-da74b2066d39)
![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/32f58405-264c-45b4-a76f-413c133597c0)
![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/5569fcd2-dbbe-42ce-8037-8b95482ffee2)
![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/10cdaee9-ace8-4853-b2a8-528d65ed98bc)

===============================================================================================================
#### Automate deployment of resources using Template
* ARM Template - Azure resource manager
  * Every ARM template contains 6 basics key value pairs.
  ```js
   {
     "$schema": "https://schema.management.azure.com/schemas/2015-01-01/deploymentParameters.json#",  // fixed string
     "contentVersion": "1.0.0.0",    // to track version
     "parameters": {},               // are variables that we can pass to template
     "variables" : {},               // variable which are coming from inside
     "resources" : [],               // We can create arrays of resource using single ARM 
     "outputs"   : {}                 
  }

  ```\
* If we run the same arm template with same resource name, then it will skip those resources, which are currently exist in azure
* We can deploy template using Azure portal - > template spec, but in this case we cannot upload parameter file, we have to manually fill the params.
* We can also use Powershell to upload template and param file and deploy the resource.
  ```
  New-AzResourceGroupDeployment -ResourceGroupName "amarmdemo" -TemplateFile "template.json" -TemplateParameterFile "parameter.json"
  ```
**We can use Biceps and Terraform to automate also**



===============================================================================================================
## Azure Kuberntes services AKS
* creating AKS cluster is similar to creating any other resource
* While creating we can choose our networking type, nodepool, resourcegroup etc
* NODEPOOL  -> this is actually number of vms that we want to run under this cluster
  * we can also set to scaleup and down nodepool depending upon load
  * aks will automatically allot the container to different pool to maintain performance
 * AKS will also create loadbalancer to divert load to different pool
 * We can choose the load balancer IP to be public so that we can access the services via internet
 * We can also add PVC (Persistent volume claim) to pods to create persisted data
 * We cannot Azure disks (managed disk) because we can attach this to only one pod. We cannot share data between multiple pod
 * Azure files, azure blob can be used for this
![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/b722b470-6d2f-42ad-be3c-a6db60eb9e02)
![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/5eb49f4c-9fc6-4bae-8651-b9484bd8654d)


===============================================================================================================
## Azure Container Instances and Container Apps
The concept of a container is that you're gonna take a piece of code, and you are going to package it including all of its dependencies, everything
that it needs to run in one image, and then you can deploy that image to development, to staging, to production whether it's Azure or AWS
or Google Cloud or in a VM or anywhere that you want to deploy it, that image is unmodified to being deployed everywhere it goes, all you need to do
is just modify the settings that go along with the image.

![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/81908e91-ea54-41fa-9c5d-fb1b394201c6)

* Kubernetes is one of the container service tha Azure provide. It contains cluster of server and it is highly scalable.
* Azure Container Instance (ACI) is simpler and cheaper and runs on only one node.
* We also have container apps, which has simplicity of container Instance but with more control/feature

#### Azure Container Instance (ACI)
* quick simple and cheap
* no scaling
* we can deploy docker image here, but cannot control number of pod etc
* if we want to scale, we have to create new ACI with more cpu and memory
* We can create container group to run multiple pod in same host
* We cannot create container grp from portal, we have to use command prompt for this
```json
  {
  "$schema": "https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#",
  "contentVersion": "1.0.0.0",
  "parameters": {
    "containerGroupName": {
      "type": "string",
      "defaultValue": "myContainerGroup",
      "metadata": {
        "description": "Container Group name."
      }
    }
  },
  "variables": {
    "container1name": "aci-tutorial-app",
    "container1image": "mcr.microsoft.com/azuredocs/aci-helloworld:latest",    //image 1
    "container2name": "aci-tutorial-sidecar",
    "container2image": "mcr.microsoft.com/azuredocs/aci-tutorial-sidecar"      // image 2
  },
  "resources": [
    {
      "name": "[parameters('containerGroupName')]",
      "type": "Microsoft.ContainerInstance/containerGroups",
      "apiVersion": "2019-12-01",
      "location": "[resourceGroup().location]",
      "properties": {
        "containers": [
          {
            "name": "[variables('container1name')]",
            "properties": {
              "image": "[variables('container1image')]",
              "resources": {
                "requests": {
                  "cpu": 1,
                  "memoryInGb": 1.5
                }
              },
              "ports": [
                {
                  "port": 80     //image 1 port
                },
                {
                  "port": 8080
                }
              ]
            }
          },
          {
            "name": "[variables('container2name')]",
            "properties": {
              "image": "[variables('container2image')]",
              "resources": {
                "requests": {
                  "cpu": 1,
                  "memoryInGb": 1.5
                }
              }
            }
          }
        ],
        "osType": "Linux",
        "ipAddress": {
          "type": "Public",
          "ports": [
            {
              "protocol": "tcp",                       //image 2 port
              "port": 80
            },
            {
                "protocol": "tcp",
                "port": 8080
            }
          ]
        }
      }
    }
  ],
  "outputs": {
    "containerIPv4Address": {
      "type": "string",
      "value": "[reference(resourceId('Microsoft.ContainerInstance/containerGroups/', parameters('containerGroupName'))).ipAddress.ip]"
    }
  }
}
```
  ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/302a8aaa-1f15-42fc-a53f-891d34f9284b)

#### Azure Container Apps
* In between AKS and ACI
* We can set min max replica to scale the application
* We have control over ingress to allow public access or not etc
* We can multiple container images, they will run as pod and scale together

#### Azure container Registry (ACR)
* private repo to store docker images
* We can see the images in repositories menu in left side


===============================================================================================================
## Manage Virtual Network

* We can select region while creating Vnet
 * This add restriction to resource which we are going to add inside this vnet
 * all resources needed to be in same region to be part of the vnet
* While creating vnet we will recieve private IP address space, and accordingly we can specify subnet under it
  * 10.0.0.0/16 -> we have range 10.0.0.0 to 10.0.255.255  (256*256 = 65536)
  * 10.0.0.0/24 -> range 10.0.0.0 - 10.0.0.255  (256 address)
* Vnet are free , but we have limited numner of vnet that we can create around 2 to 3 hundreds
![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/2643d22c-87bc-4121-b5a2-3b75547c2982)


**A NAT gateway is recommended for outbound internet access from subnets. Edit the subnet to add a NAT gateway.**
A NAT gateway is a Network Address Translation (NAT) service. You can use a NAT gateway so that instances in a private subnet can connect to services outside your VPC (Virtual private cloud)but external services cannot initiate a connection with those instances.

In the context of virtual networking, a peered virtual network address space refers to the ability to connect two or more virtual networks in Azure, allowing them to communicate with each other securely.

When you create multiple virtual networks (VNets) within an Azure subscription, they are isolated by default and cannot communicate with each other. Network peering enables seamless connectivity between these VNets. When two VNets are peered, they appear as one network, allowing resources within those VNets to communicate as if they were on the same network, despite being in different regions or subscriptions.




## Public IP address
* We can create new public IP adress using market place -> public IP address
* Public IP address are charged on hourly basis
* We have option for static and dynamic IPaddress
* If we purchase dynamic IP, we reserve One IP with domain name we enterd but it is not assigned to that domain untill we assigned IP to any resource.
* IP are assigned only to Network Interface Card (NIC) or Load Balancer

**To allow VM to public IP -> connect VM's NIC to VNET. Allow public access from VNET. assign public IP to NIC**
**We can create firewall and attach it to VNET and give firewall a public IP to add firewall to VNET.**


## UDR (User defined Route)  (Route table)
* We can create route table from resources
* Associate the route table with VNET subnet (subnet -> select VNET -> slect subnet)
* To create rules go to Routes(left panel) -> enter name-> IP address -> and next Hop
  ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/a2f81782-3be6-410f-83b1-c36fec7e1d3f)
* Internet -> default
* None -> blocking the traffic within subnet
* Virtual appliance -> In this case we can enter IP of another resource (Firewall)



* Route table
* 0.0.0.0/0 -> all IPs
![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/90e568b2-d93d-4b0a-9558-bde33e520416)


* Now we have VM connected to NIC under VNET subnet and we have route table with rule that any IP within this subnet will go to Firewall first.
#### Firewall Rule
* There are 3 types of rule:
  * Nat rule  -> Incoming trafic -(TCP/UDP) -destination address will be public IP of firewall - translated address-> VM private address
  * Now VM will be access through Firewall IP
    ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/bd21e8a0-e099-4448-b6bc-48278efebe19)

  * Network Rule - Outbound traffic - allow traffic from source to given Destination IP
    ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/8d724a40-a219-4b3b-9388-6687406f026a)

  * Application rule - allows access to domain name
  ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/36826193-c281-40fe-b7be-b0c955c3377f)





===============================================================================================================
## Virtual WAN
![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/732e1495-a45a-4ba0-80ae-f54c36246fb7)
* We can create WAN from resources
* We will incur only when we associate HUN to wan


===============================================================================================================
## Implement and manage virtual networking
#### Vnet Peering
* By default resources in VNET1 doesnot have access to resource in VNET2
* Peering is concept of setting up relation ship in two vnet such that they can recognise each other.
* To setup peering address range should not be over lapping
  * vnet1 -> 10.0.0.0/16  -> 10.0.0.0 - 10.0.255.255
  * vnet2 -> 10.1.0.0/16  -> 10.1.0.0 - 10.1.255.255
* To add peering -> go to any vnet-> peering -> add peering
  **HOPPING SPOKE MODEL OF NETWORK TOPOLOGY- create one vnet which has peering with all other vnet. Now we don't to create peering with all of them.**
  select traffic forwarded from remote for hopping model
  ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/0523e739-0d7a-4adf-8b01-6870de20fd1f)

  If you want to peer with VNET from another subscription than you can do this by entering resource ID
  ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/a94dadf7-03cf-4c67-b9ca-6ab43fbec65f)

* For peering to work, NSG and firewall should allow the network call.
* Vnet peering will incur cost for data transfering
* 0.01 per GB for inbound  and 0.01 per GB for outbound. Means transferring from 1 vnet to another cost 0.02
#### Global Peering
* If we want to peer with Vnet which is in different region.
* Global peering charges are much higher

#### Azure to Azure virtual network gateway
* Another way to allow traffic between two vnet
* Traffic cost is less but we have to pay for gateway on per hour basis
* Incoming traffic is free
* virtual network gateway is also the device use when we want to setup a VPN
  * Site to site  - onpremise to azure - we need to add virtual network gateway at azure and physical network gateway at corporate side.
  * Point to site
* to add virtual network gateway (we need to do same thing in both the vnet)
  * create gateway subnet -> vnet-subnet-add gateway subnet
  * create new resource - virtual network gateway
    * region will be same as your gateway
    * sku - diffrent type of gateway - bandwidth, connection limit - cost high for better gateway
      ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/d5187746-ef56-4ebe-b3c7-d9b238f12c6b)
* go to first gateway -> connection -> Add -> enter details
  ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/2ddb93c9-9b57-4617-a2a7-a827205053c2)
* create connection from gateway too  (shared key should be same as what we entered in first gateway)
* To create gateway cross subscription we need to use powershell. Option not present in portal
  
===============================================================================================================
## Configuring Name Resolution
* There are 3 option for Domain name resolution
  * Azure provided DNS (default)
  * You provide DNS (run your own DNS server)
  * Azure private DNS
DNS help us to recognise our server using familar name instead of remembering their IP
![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/ca1e012a-52b2-4451-95a2-21c218091476)
![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/751be520-bda9-46cd-8f71-3efa3e18f553)
![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/f68afa4d-75ca-459a-82d8-6f3c6f80367f)

* In Resources there are two DNS Zones
  * DNS zones  -> you have buy and register in public registry- Internet accessible
  * Private DNS zones -> Internal to azure only
  ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/695e9630-87fc-4301-a978-063f4c13829e)

* TO add DNS to vnet -> go to your DNS -> Virtual network link -> add -> select your Vnet (select autoregister to see all resource in the vnet in DNS page)
* Now if we have two vms in same vnet, it will be visible to us, and we can give them subdomain (db.devserver.local) name to access
* ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/77f983dc-2483-4b85-a6d4-3a35d17e0435)




===============================================================================================================
## Secure access to virtual network

#### NSG (Network security group)

* Filter that either allow or denies traffic travel over the network to reach their destination
* It block a subnet
* We can associate NSG to multiple subnet
* NSG can also be applied to Network Interfce card (NIC)
* It is a free resource
* When we create NSG, it comes with default set of rules (Inbound and Outbound rules).
* We cannot remove this rules, but we can create rule with higher priority to override it. (1 being highest)
* ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/3be5296d-0001-4808-b7e7-f572d6220309)
* We can add NSG to subnet - Vnet-> subnet-> select subnet-> NSG -> select NSG you want to select.
* We can add NSG to NIC -> Network security group -> select your NSG
  ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531 263/e7f34a46-dba5-4ddb-a1c7-2d5452527d18)


#### Application security group
* In NSG instead of choosing any NSG If we choose specific IP
![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/843b4951-1907-46b8-a53d-b0d9c39b4342)
* But managing this will be difficult, therefore we can create application Security group (an abstraction that will contain multiple IP)
* resource -> ASG-> create ->
* Now in NSG instead of choosing Ip we can select this ASG
* We need to add this ASG in VM also from networking
 ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/e1f36e2e-d7a2-4883-8ddf-086124408512)


===============================================================================================================
## Load Balancing

![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/445eff67-1822-4080-ab64-b36532e4c34b)
![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/2ecf6e21-99db-4c23-92b4-cf7016957b22)
![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/5ab9b5ac-763e-498f-b72c-aeb430512d4d)
* We can create load balancer for private IP (balancing traffic coming from internal) or with public IP
* We can add Vms in backend pool to load balance it
* basic SKU only suppport NIC but standard SKU support IP of VM to add in backend pool
* We can also add health probe to check and figure whether the machine is working or not, accordingly traffic will be diverted there.
  ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/aba571ab-a1fd-4fe2-9200-75842c5ba409)
 
* We can also add rule balancing rule from left menu
  ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/10419bbe-eae7-4bec-bd44-f1e58846d95c)

**Azure load balancer is layer 4 LB. It understand IP and port and protocol type but it doesnot undestand url**
* We can create application gateway. It is a layer 7 LB and understand URL.
* With LB we can also have WAF (web firewall) in application gateway
  ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/77698be6-b116-417c-8e69-8673d8614712)
* Application gateway will reside inside a vnet.
* In application gateway we can set multiple option in backend pool
  ![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/7108adda-2c57-4448-9a63-15c58e69364a)
  



===============================================================================================================



===============================================================================================================



===============================================================================================================
