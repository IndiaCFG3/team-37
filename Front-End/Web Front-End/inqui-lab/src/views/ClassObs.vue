<template>
    <v-card max-width="1470" class="ml-5 mt-5">
        <v-tabs v-model="tab" background-color="primary" dark>
            <v-tab v-for="Team in GetTeams" :key="Team.TeamNumber">
                {{ Team.TeamNumber }}
            </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
            <v-tab-item v-for="Team in GetTeams" :key="Team.TeamNumber">
                <v-card flat>
                    
                    <v-card-text>{{ Team.Plan }}</v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs-items>
    </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Teams',
    data () {
        return {
            tab: null,
        }
    },

    methods: {
        ...mapActions([
            
        ])
    },

    computed: {
        ...mapGetters([
            'GetTeams',
        ])
    }
}
</script>