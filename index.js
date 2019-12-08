import rp from 'request-promise'
import cherio from 'cheerio'
import Table from 'cli-table'

let users = []

const options = {
  url: `https://www.fundamentus.com.br/detalhes.php?papel=ITSA4`,
  json: true
}

const prinData = () => {
  console.log('Ok')
  console.log('Ok')
}

const challegesCompletedPushArray = usersData => {
  console.log(usersData)
}

rp(options)
  .then(html => {
    const $ = cherio.load(html)
    const names = [
      'papel',
      'cotacao',
      'tipo',
      'data',
      'dataCotacao',
      'empresa',
      'min',
      'max',
      'subsetor',
      'volume'
    ]
    const values = []
    const tableBody = $('table.w728')
      .first()
      .find('tr > td.data > span.txt')
      .each(function() {
        values.push(
          $(this)
            .text()
            .trim()
        )
      })
    const data = values
      .map((info, idx) => ({ [names[idx]]: info }))
      .reduce((acc, acu) => {
        let start = { ...acc }
        let end = acu
        return { ...start, ...end }
      })
    process.stdout.write('loading \n')
    console.log(data)
  })
  .catch(err => {
    console.log(err)
  })
