import axios from 'axios'
import XLSX from 'xlsx'
import JsPDF from 'jspdf'
import 'jspdf-autotable'
//  var apiUrlBase = 'http://172.16.10.125:8080'
//  var apiUrlBase = 'http://192.168.10.32:8080'
var apiUrlBase = 'http://104.209.196.204:8080'

export default {
  postEmpty(url, errCode) {
    console.log('----En POST---')
    axios.post(apiUrlBase + url)
    .then(response => {
      if (response.status !== 201) {
        console.log('ErrorrrrrrPost')
        console.log(response)
        errCode = response.statusText
        return errCode
      }
      console.log('Exito!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ahora la info:')
      var info = response.data
      console.log(info)
    })
    .catch(error => {
      // Request failed.
      console.log('Falló')
      console.log(error)
      errCode = error
    })
    return errCode
  },
  async getGeneralDev(url) {
    console.log('En el get general')
    await axios.get(url)
      .then(response => {
        if (response.status === 200) {
          console.log(response.data.Name)
          console.log('heyyyyyy nombre arriba ---')
          return response.data.Name
        }
      })
      .catch((err) => {
        //  Request failed.
        console.log('FAIL----' + err)
      })
  },
  getGeneral (url, data) {
    console.log('En el get general')
    axios.get(url)
    .then(response => {
      if (response.status !== 200) {
        data.error = response.statusText
        return data
      }
      var info = response.data
      console.log('Ahora la informacion')
      console.log(info)
      data.dataGet = Object.values(info)
    })
    .catch((err) => {
    //  Request failed.
      data.error = err
      console.log('FAIL----', err)
    })
    return data
  },
  getAll(url, data) {
    console.log('Obteniendo datos... (GET ALL)')
    console.log(data)
    console.log('Te gusto ? ahora la url: ' + apiUrlBase + url)
    console.log(apiUrlBase + url)
    axios.get(apiUrlBase + url)
    .then(response => {
      if (response.status !== 200) {
        data.error = response.statusText
        return data
      }
      var info = response.data
      console.log('Ahora la informacion')
      console.log(info)
      data.dataGet = Object.values(info)
    })
    .catch((err) => {
    //  Request failed.
      data.error = err
      console.log('----FAIL GET----', err)
    })
    return data
  },
  put(url, data) {
    console.log('---PUT---')
    console.log(apiUrlBase + url)
    console.log(data)
    axios.put(
      apiUrlBase + url,
      data.dataPostDel
    )
    .then(response => {
      if (response.status !== 200) {
        data.error = response.statusText
        console.log('Inesperado')
        return data
      }
      console.log('EXITO!!!')
    })
    .catch((err) => {
    // Request failed.
      data.error = err
      console.log('---FAIL PUT---', err)
    })
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
    console.log('---POSTING----')
    axios.post(
    apiUrlBase + url,
    data.dataPostDel // esto debe cambiar acuerdo a como se use el form
    )
    .then(response => {
      if (response.status !== 201) {
        console.log('---Error Post---')
        console.log(response)
        data.error = response.statusText
        return data
      }
      console.log('Exito!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ahora la info:')
      var info = response.data
      console.log(info)
      data.dataRespond = info
    })
    .catch(error => {
      // Request failed.
      console.log('---Falló POST----')
      console.log(error)
      data.error = error
    })
    return data
  },
  /*
  detele(url, data) {
    axios.delete(
    apiUrlBase + url,
    data.dataPostDel
    )
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
  }
  */
  delete(url, data) {
    console.log('-----Eliminando-----')
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
      console.log('Fatal')
      console.log(error)
      data.error = error
    })
    return data
  },
  exportExcel(name, dataJSON) {
    console.log('----Exportando EXCEL-----')
    var json = XLSX.utils.json_to_sheet(dataJSON)
    // A workbook is the name given to an Excel file
    var wb = XLSX.utils.book_new() // make Workbook of Excel
    XLSX.utils.book_append_sheet(wb, json, 'PrimeraPagina')
    // export Excel file
    XLSX.writeFile(wb, name + '.xlsx') // name of the file
  },
  exportPDF(name, title, columns, json) {
    console.log('----Exportando PDF------')
    var doc = new JsPDF('p', 'mm')
    doc.autoTable(columns, json)
    doc.setFont('Georgia', 'italic')
    doc.text(title, 105, 10, {align: 'center'})
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
    /* return cell type
       type: b Boolean, e Error, n Number, d Date, s Text, z Stub
    */
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
    console.log('En search')
    console.log(myArray)
    console.log(key)
    console.log(value)
    for (var i = 0; i < myArray.length; i++) {
      console.log(myArray[i][key])
      if (myArray[i][key] === value) {
        console.log('encontrado' + value)
        return myArray[i]
      }
    }
  }
}
