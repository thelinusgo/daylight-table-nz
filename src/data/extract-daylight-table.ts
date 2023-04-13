import * as tabula from 'tabula';
import * as fs from 'fs';

function extractPDF() {
        // specify the pages with tables you want to extract
    const pages = '4-8';

    // extract the tables as a list of dataframes
    tabula.readPDF(
    'https://www.aip.net.nz/assets/AIP/General-GEN/2-TABLES-AND-CODES/GEN_2.7.pdf',
    { pages, multipleTables: true }
    ).then((dfs: any) => {
    // convert each dataframe to a dictionary
    const tableData = dfs.map((df: any) => {
        const data = df.toCSV();
        const rows = data.split('\n').slice(1, -1).map((row: string) => row.split(','));
        const headers = rows[0];
        const tableDict = { headers, rows: rows.slice(1) };
        return tableDict;
    });

    // save the table data as a JSON file
    const jsonData = JSON.stringify(tableData, null, 2);
    fs.writeFileSync('table_data.json', jsonData);
    });
}

export default extractPDF;