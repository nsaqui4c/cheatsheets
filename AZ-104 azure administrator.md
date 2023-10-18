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

*To create and use Azure services, you first need to sign up [for an Azure account]. 
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



===============================================================================================================



===============================================================================================================
