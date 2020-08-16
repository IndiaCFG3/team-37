<template>
    <v-card>
        <v-tabs v-model="tab" background-color="primary" dark>
            <v-tab v-for="Team in Teams" :key="Team.TeamNumber">
                {{ item.tab }}
            </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
            <v-tab-item v-for="item in items" :key="item.tab">
                <v-card flat>
                    <v-card-text>{{ item.content }}</v-card-text>
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

    computed: {
        ...mapGetters([
            'CheckCurrentUser',
        ])
    }
}
</script>