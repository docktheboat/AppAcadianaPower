export interface Outage{
    outageType: String,
    zipCode : number,
    creationTime: String,
    recoveryTime: Map<String, number>
}