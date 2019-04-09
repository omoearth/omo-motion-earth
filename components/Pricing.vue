<template>
<section class="section is-medium">
    <div class="container has-text-centered">
        <p class="title has-text-blue is-size-1 is-size-3-mobile">
            THE SERVICE
        </p>
        <p class="subtitle is-4 is-size-5-mobile">
            and our estimated pricing for our future mobility flatrates
        </p>
    </div>
    <br>
    <br>
    <div class="container">
        <div class="columns pricing-table is-multiline">

            <div v-for="product in products" :key="product.name" class="column is-3">
                <div class="card">
                    <div class="card-image has-text-centered">
                        <figure class="image">
                            <img :src="buildImageUrl(product.image)" :alt="product.name">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">{{product.price}}€* / day **</p>
                                <p class="subtitle is-5">{{product.name}}</p>
                            </div>
                        </div>
                        <div>{{product.estimated}}</div><br>
                         <table class="table is-striped is-narrow is-hoverable is-fullwidth">
                            <tbody v-for="feature in product.features" :key="feature.name">
                                <tr>
                                    <td>{{feature.name}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                   
                    <footer class="card-footer">
                        <button class="button is-fullwidth is-success">I WANT THIS</button>
                    </footer>
                </div>
            </div>

        </div>
        <section>*estimated future pricing, could be subject to change  **monthly payment</section>
       
    </div>
</section>
</template>


<script>
export default {
    data() {
        return {
            products: [
                {
                    name: 'Car Surfing',
                    image: '0_rideshare',
                    price: '0',
                    estimated: 'START NOW',
                    css: 'is-success',
                    features: [{
                            name: 'Rideshare'
                        },
                        {
                            name: '-'
                        },
                        {
                            name: '-'
                        },
                        {
                            name: '-'
                        }
                    ]
                },
                {
                    name: 'eMini Flat',
                    image: '1_miniscooter',
                    price: '1',
                    estimated: 'EST. 2020 Q1',
                    features: [{
                            name: 'Rideshare'
                        },
                        {
                            name: 'eMiniScooters'
                        },
                        {
                            name: '-'
                        },
                         {
                            name: '-'
                        },

                    ]
                },
                {
                    name: 'ePedelec Flat',
                    image: '2_pedelec',
                    price: '2',
                    estimated: 'EST. 2020 Q2',
                    features: [{
                            name: 'Rideshare'
                        },
                        {
                            name: 'eMiniScooters'
                        },
                        {
                            name: 'ePedelecs'
                        },
                         {
                            name: '-'
                        }
                    ]
                },
                {
                    name: 'eScooter Flat',
                    image: '3_scooter',
                    price: '3',
                    estimated: 'EST. 2020 Q3',
                    features: [{
                            name: 'Rideshare'
                        },
                        {
                            name: 'eMiniScooters'
                        },
                        {
                            name: 'ePedelecs'
                        },
                        {
                            name: 'eScooter'
                        },
                       
                    ]
                },
                {
                    name: 'eScooter Flat',
                    image: '4_minicar',
                    price: '4',
                    estimated: 'EST. 2020 Q4',
                    features: [{
                            name: 'Rideshare'
                        },
                        {
                            name: 'eMiniScooters'
                        },
                        {
                            name: 'ePedelecs'
                        },
                        {
                            name: 'eScooter'
                        },
                        {
                            name: 'eMiniCars'
                        },
                         {
                            name: '-'
                        },
                        {
                            name: '-'
                        },
                        {
                            name: '-'
                        },
                    ]
                },
                {
                    name: 'eScooter Flat',
                    image: '5_car',
                    price: '5',
                    estimated: 'EST. 2021 Q1',
                    features: [{
                            name: 'Rideshare'
                        },
                        {
                            name: 'eMiniScooters'
                        },
                        {
                            name: 'ePedelecs'
                        },
                        {
                            name: 'eScooter'
                        },
                        {
                            name: 'eMiniCars'
                        },
                        {
                            name: 'eCars'
                        },
                        {
                            name: '-'
                        },
                         {
                            name: '-'
                        },
                    ]
                },
                {
                    name: 'eCity Flat',
                    image: '6_public_transport',
                    price: '10',
                    estimated: 'EST. 2021 Q2',
                    features: [{
                            name: 'Rideshare'
                        },
                        {
                            name: 'eMiniScooters'
                        },
                        {
                            name: 'ePedelecs'
                        },
                        {
                            name: 'eScooter'
                        },
                        {
                            name: 'eMiniCars'
                        },
                        {
                            name: 'eCars'
                        },
                         {
                            name: 'Public Transport'
                        },
                        {
                            name: '-'
                        },
                    ]
                },
                {
                    name: 'InterCity Flat',
                    image: '7_intercity',
                    price: '20',
                    estimated: 'EST. 2021 Q3',
                    features: [{
                            name: 'Rideshare'
                        },
                        {
                            name: 'eMiniScooters'
                        },
                        {
                            name: 'ePedelecs'
                        },
                        {
                            name: 'eScooter'
                        },
                        {
                            name: 'eMiniCars'
                        },
                        {
                            name: 'eCars'
                        },
                        {
                            name: 'City Public Transport'
                        },
                        {
                            name: 'InterCity Train & Bus'
                        },
                    ]
                },
            ]
        }
    },
    methods: {
      buildImageUrl: function (name) {
        return require(`@/assets/products/` + name + `.png`);
      },
    }
}
</script>


