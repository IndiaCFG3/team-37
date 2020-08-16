<template>
    <v-card max-width="1470" class="ml-5 mt-5">
        <v-tabs v-model="tab" centered background-color="deep-purple accent-4" dark>
            <v-tab v-for="Team in GetTeams" :key="Team.TeamNumber">
                {{ Team.TeamNumber }}
            </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
            <v-tab-item v-for="Team in GetTeams" :key="Team.TeamNumber">
                <v-card flat>
                    <form class="ma-6">
                        <v-select v-model="Idea"  :items="Ideas" label="Idea" required></v-select>
                        <v-select v-model="Plan" :items="Plans" label="Plan" required></v-select>
                        <v-select v-model="MakeTest" :items="MakeTests" label="Make and Test" required></v-select>
                        <v-select v-model="Presentation" :items="Presentations" label="Presentations" required></v-select>
                        <v-text-field v-model="Students" label="Presentions: Students Attempted" required></v-text-field>
                        <v-btn class="mr-4 mb-4 primary" @click="submit">submit</v-btn>
                        <v-btn class="mb-4" @click="clear">clear</v-btn>
                    </form>
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
            Students: '',
            tab: null,

            Idea: null,
            Plan: null,
            MakeTest: null,
            Presentation: null,

            Ideas: [ 'Attempted', 'Attempt', 'Good', 'Showcase' ],
            Plans: [ 'Not Attempted', 'Partial Attempt', 'Completed'],
            MakeTests: [ 'Not Attempted', 'Partial Attempt', 'Completed'],
            Presentations: [ 'Not Attempted', 'Attempted' ],
        }
    },

    methods: {
        submit () {
            console.log(this.tab);
            console.log(this.Idea);
            console.log(this.MakeTest);
            console.log(this.Presentation);
            console.log(this.Plan);
        },
        clear () {
            this.$v.$reset()
            this.select = null
        },
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