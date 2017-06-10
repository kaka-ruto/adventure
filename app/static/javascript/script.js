
const addPlaces = document.querySelector('.add-places');
const placesList = document.querySelector('.places');
const places = [];

function addPlace(e) {
    // Prevent page reload
    e.preventDefault();
    // Grab the user's input value
    const text = (this.querySelector('[name=place]').value);
    // Create an object of the place added
    const place = {
        text: text,
        // Keep it unchecked
        done: false
    };
    // Put the added place to the places array
    places.push(place);
    populateList(places, placesList);
    this.reset();
}

// Create fxn to create the actual HTML to hold the added places
function populateList(regions = [], regionsList) {
    // Use map to take the raw data and return them as strings
    regionsList.innerHTML = regions.map((region, i) => {
        // Use backticks to retutn html
        return `
            <li>
                <input type="checkbox" data-index=${i} id="place${i}" ${region.done ? 'checked' : ''} />
                <label for="place${i}">${region.text}</label>
            </li>
        `;
    }).join('');    // map wil return an array, make t one big string
}

addPlaces.addEventListener('submit', addPlace); // Listen on the submit event and run fxn addPlace once submitted