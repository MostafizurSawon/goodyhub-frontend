const loadDash = () => {
  fetch(
    'https://goodyhub-backend.onrender.com/products/products-list/'
  )
    .then((res) => res.json())
    .then((data) => {
      // console.log("1->",data);
      if (data.results.length > 0) {
        displayDash(data?.results);
        displayAll(data?.results);
        // console.log(data.results.length);
      } else {
        // console.log(data);
        
      }
      
    });
};

const displayDash = (products) => {
  products?.forEach((pd) => {
      const parent = document.getElementById('all-products');
      const inside = document.createElement("div");
  
      const isoDateString = pd.created;
      const date = new Date(isoDateString);
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
      };
  
      // Convert to a human-readable format
      const formattedDate = date.toLocaleString('en-US', options);
  
      inside.classList.add(
        "flex",
        "flex-col",
        "rounded-xl",
        "bg-white",
        "bg-clip-border",
        "text-gray-700",
        "shadow-lg"
      );
      inside.innerHTML = `
            <div class="p-6">
              <div class="mb-3 flex items-center justify-between">
                <h5 class="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                  ${pd.name}
                </h5>
                <p class="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    class="-mt-0.5 h-5 w-5 text-yellow-700"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  5.0
                </p>
              </div>
              <p class="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                ${pd.description}
              </p>
              
              <p class="mt-4 block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">Price: $${pd.price}</p>
              <p class="mt-4 block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">Available products: ${pd.quantity}</p>
              <p class="mt-4 block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">Owner: <span class="text-green-600">${pd.user}</span></p>
              <p class="mt-4 block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">Created On: ${formattedDate}</p>
              
            </div>
            <div class="p-6 pt-3">
              <button
                class="block w-full select-none rounded-lg bg-green-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
              >
                Details
              </button>
            </div>
        
    
      `;
  
      parent.appendChild(inside);

  

    
  });
};

loadDash();




