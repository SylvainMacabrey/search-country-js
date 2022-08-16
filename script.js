const input = document.querySelector(".input-search");
const result = document.querySelector(".result");

async function search() {
    try {
        result.innerHTML = '';
        const response = await fetch(`https://restcountries.com/v3.1/name/${this.value}`);
        const countries = await response.json();
        if(countries.length > 0) {
            const html = countries.map(country => {
                return `
                    <tr class="country">
                        <td>Country: ${country.name.common}</td>
                        <td>Capital: ${country.capital}</td>
                        <td>Population: ${country.population}</td>
                        <td>Flag: ${country.flag}</td>
                    </tr>
                `;
            }).join('');
            result.innerHTML = html;
        } else {
            result.innerHTML = `<div class="no-result">No result</div>`;
        }
    } catch (err) {
        throw new Error(err);
    }
}

input.addEventListener('keyup', search);