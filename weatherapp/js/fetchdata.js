export const apiKey = '0191f90ee4ec64e5c7eb13cb519f1ca5';
export async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    //    console.log(data);
    if (!response.ok) {
       throw new Error('không fetch được data');
    }
    return await response.json();
 }