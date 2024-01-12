#### Operator
-eq
-ne (not equal to)
-lt (less than)
-le (less than or equal to)
-gt (greater than)
-ge (greater than or equal to)
-like (like—a wildcard comparison)
-notlike (not like—a wildcard comparison)
-contains (contains the specified value)
-notcontains (doesn't contain the specified value)

#### Where-Object   
```
To filter object from list of objects
<cmdlet> | Where-Object -Property <property_name> <operator> <filter>
Get-AzResourceGroup | Where-Object -Property Location -eq southeastasia
```


#### Select -Object
```
To select properties from list of object
Get-Process | Select-Object -Property ProcessName, Id, WS
Get-AzResourceGroup | Where-Object -Property Location -eq southeastasia | Select-Object ResourceGroupName        // rg_sb_southeastasia_162220_3_17050347177
Get-AzResourceGroup |  Select-Object ResourceGroupName                  //rg_sb_southeastasia_162220_3_17050347177,rg_sb_eastus_162220_1_170503471362,rg_sb_westeurope_162220_2_170503471569
```
``` 
To Select first Object from list
Get-AzResourceGroup |  Select-Object -First 1     // this will select first object
Get-AzResourceGroup |  Select-Object -First 2     // this will select first 2 object
```
