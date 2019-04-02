import axios from 'axios'
import XLSX from 'xlsx'
import JsPDF from 'jspdf'
import 'jspdf-autotable'
//  var apiUrlBase = 'http://172.16.10.108:2222'
var apiUrlBase = 'http://192.168.10.101'
// var apiUrlBase = 'http://25.4.250.51:2222'
// var apiUrlBase = 'http://localhost:2222'
//  var apiUrlBase = 'http://104.209.196.204:8080'

export default {
  updateData(newData) {
    this.error = newData.error
    this.dataPostDel = newData.dataPostDel
  },
  postEmpty(url, errCode) {
    axios.post(apiUrlBase + url)
    .then(response => {
      if (response.status !== 201) {
        console.log(response)
        errCode = response.statusText
        return errCode
      }
      var info = response.data
      console.log(info)
    })
    .catch(error => {
      // Request failed.
      errCode = error
    })
    return errCode
  },
  async getGeneralDev(url) {
    await axios.get(url)
      .then(response => {
        if (response.status === 200) {
          return response.data.Name
        }
      })
      .catch((err) => {
        //  Request failed.
        console.log('FAIL----' + err)
      })
  },
  getGeneral (url, data) {
    axios.get(url)
    .then(response => {
      if (response.status !== 200) {
        data.error = response.statusText
        return data
      }
      var info = response.data
      data.dataGet = Object.values(info)
    })
    .catch((err) => {
    //  Request failed.
      data.error = err
    })
    return data
  },
  getAll(url, data) {
    axios.get(apiUrlBase + url)
    .then(response => {
      if (response.status !== 200) {
        data.error = response.statusText
        return data
      }
      var info = response.data
      data.dataGet = Object.values(info)
    })
    .catch((err) => {
    //  Request failed.
      data.error = err
    })
    console.log(data)
    return data
  },
  put(url, data) {
    console.log(apiUrlBase + url)
    console.log(data)
    axios.put(
      apiUrlBase + url,
      data.dataPostDel
    )
    .then(response => {
      if (response.status !== 200) {
        data.error = response.statusText
        return data
      }
    })
    .catch((err) => {
    // Request failed.
      data.error = err
    })
    console.log(data)
    return data
  },
  // para pedir campos en especifico, se pasa un objeto con los parametros del get y sus valores
  getCustom(objectFields, url, data) {
    axios.get(
      apiUrlBase + url,
      {params:
        objectFields
      }
    )
    .then(response => {
      if (response.status !== 200) {
        data.error = response.statusText
        return data
      }
      var info = response.data
      data.dataGet = Object.values(info)
    })
    .catch(error => {
      // Request failed.
      data.error = error
    })
    return data
  },
    // se realiza un post dependiedo lo que almacene dataPostDel
    // se asume que exista un binding entre los campos del form con los de dataPostDel
  post(url, data) {
    axios.post(
      apiUrlBase + url,
      data.dataPostDel  // esto debe cambiar acuerdo a como se use el form
    )
    .then(response => {
      if (response.status !== 201) {
        data.error = response.statusText
        return data
      }
      var info = response.data
      data.dataRespond = Object.values(info)
    })
    .catch(error => {
      // Request failed.
      data.error = error
    })
    console.log('dando respuesta del post')
    console.log(data)
    return data
  },
  postWithHeader(url, head) {
    console.log('header:...' + head)
    axios.put(apiUrlBase + url, this.apiUrlBase + head, { headers: {'Content-Type': 'text/uri-list'} })
      .then(function (response) {
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error)
        //  alert('Error')
      })
  },
  delete(url, data) {
    console.log(url)
    axios.delete(apiUrlBase + url)
    .then(response => {
      if (response.status !== 200) {
        data.error = response.statusText
        return data
      }
    })
    .catch(error => {
      // Request failed.
      data.error = error
    })
    return data
  },
  exportExcel(name, dataJSON) {
    var json = XLSX.utils.json_to_sheet(dataJSON)
    var wb = XLSX.utils.book_new() // make Workbook of Excel
    XLSX.utils.book_append_sheet(wb, json, 'PrimeraPagina')
    XLSX.writeFile(wb, name + '.xlsx') // name of the file
  },
  exportPDF(name, title, columns, json) {
    var doc = new JsPDF('l', 'mm', 'a3')
    doc.autoTable(columns, json)
    doc.setFont('Georgia', 'italic')
    // doc.text(title, 105, 10, {align: 'center'})
    doc.save(name + '.pdf') // name of the file
  },
  readXlSX(name) {
    return XLSX.readFile(name + '.xlsx')
  },
  readFormatCell(name, cell) {
    var workbook = this.readXlSX(name)
    var firstSheetName = workbook.SheetNames[0]
    var addressCell = cell
    /* Get worksheet */
    var worksheet = workbook.Sheets[firstSheetName]
    /* Find desired cell */
    var desiredCell = worksheet[addressCell]
    return desiredCell.t
  },
  compareFormatCell(name, cellToCompare, format) {
    var cell = this.readFormatCell(name, cellToCompare)
    if (cell === format) {
      return true
    } else {
      return false
    }
  },
  search(myArray, key, value) {
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i][key] === value) {
        return myArray[i]
      }
    }
  },
  searchActive(show, tag) {
    if (show === true) {
      document.getElementById(tag).style.visibility = 'visible'
      show = false
    } else {
      document.getElementById(tag).style.visibility = 'hidden'
      show = true
    }
    window.addEventListener('click', function (event) {
      if (event.target !== true) {
        document.getElementById(tag).style.visibility = 'hidden'
        show = true
      }
    }, true)
  }
}
