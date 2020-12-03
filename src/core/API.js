import {getButton, htmlCards} from '@/Components/Cards/cards.functions';
import {QUANTITY_USERS} from '@core/constans';
import {$} from '@core/dom';

export class API {
    constructor($el) {
        this.$el = $el
    }

    async getUsers(page) {
        this.page = page
        const login = $('.input-change').val()

        if (login) {
            return await fetch(`https://api.github.com/search/users?q=${login}&page=${page}&per_page=20`)
                .then(response => response.json())
                .then(response => {
                    this.users = response.items || []
                    this.totalCount = response.total_count

                    this.changedRow()
                })
        }
        return []
    }

    changedRow() {
        const html = htmlCards(this.users).join(' ')

        const $button = this.totalCount > this.users.length
            ? getButton()
            : ''

        if (this.page > 1) {
            this.$btnLoad = this.$el.find('#btn-load')

            this.$btnLoad.attr('data-page', this.page)

            this.$btnLoad.insert('beforebegin', html)

            if ((QUANTITY_USERS * this.page) > this.totalCount) {
                this.$el.remove(this.$btnLoad)
            }
            return
        }

        const result = html.length ? html + $button : 'Нет результатов'

        $('.row').html(result)

    }
}
