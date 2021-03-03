import React from 'react'
import Table from 'rc-table'
import styled from 'styled-components'
import tw from 'twin.macro'
import 'rc-table/assets/index.css'

const Title = styled.div`
  ${tw`uppercase font-normal text-left`}
`
const TableWrapper = styled.div`
  max-width: 768px;
  ${tw`mx-auto`}
`

const columns = [
  {
    title: <Title>Stock No.</Title>,
    dataIndex: 'stock',
    key: 'stock',
  },
  {
    title: <Title>Size</Title>,
    dataIndex: 'size',
    key: 'size',
  },
  {
    title: <Title>Description</Title>,
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: <Title>Pack</Title>,
    dataIndex: 'pack',
    key: 'pack',
  },
  {
    title: <Title>Wt/cs</Title>,
    dataIndex: 'wt/cs',
    key: 'wt/cs',
  },
  {
    title: <Title>Cube</Title>,
    dataIndex: 'cube',
    key: 'cube',
  },
]

const ProductTable = ({ data = [], }) => {
  return (
    <TableWrapper>
      <Table rowKey='stock' columns={columns} data={data} className='mx-auto' scroll={{x: 'auto',}} />
    </TableWrapper>
  )
}

export { ProductTable }
