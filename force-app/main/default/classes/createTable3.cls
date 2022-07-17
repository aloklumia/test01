public with sharing class createTable3 {
    @AuraEnabled(cacheable = true)
    public static List<Ship__C> getAllShips(){
        List<Ship__C> shipList =[SELECT Id, Name, Year_Started__C FROM Ship__C LIMIT 5];
        return shipList;
    }
}