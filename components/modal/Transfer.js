import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaWallet } from 'react-icons/fa'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../lib/sanity'

const Transfer = ({
    selectedCoin,
    setAction,
    thirdWebTokens,
    walletAddress
    }) => {
    const [amount, setAmount] = useState('');
    const [recipientAddress, setRecipientAddress] = useState('');
    const [coinImageUrl, setCoinImageUrl] = useState(null);

    useEffect(() => {
        const url = imageUrlBuilder(client).image(selectedCoin.logo).url()
        setCoinImageUrl(url)
    }, [selectedCoin])
  return (
    <Wrapper>
        <Amount>
            <FlexInputContainer>
                <FlexInput 
                    placeholder='0'
                    type='number'
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                    />
                <span>ETH</span>
            </FlexInputContainer>
            <Warning style={{ color: amount && '#0a0b0d'}}>Amount is required</Warning>
        </Amount>
        <TransferForm>
            <Rows>
                <FieldName>To</FieldName>
                <Icon>
                    <FaWallet />
                </Icon>
                <Recipient 
                    placeholder='Wallet Address'
                    value={recipientAddress}
                    onChange={e => setRecipientAddress(e.target.value)}
                />
            </Rows>
            <Divider />
            <Rows>
                <FieldName>Pay with</FieldName>
                <CoinSelectList>
                    <Icon>
                        <img src='' alt='coin' />
                    </Icon>
                    <CoinName>Ethereum</CoinName>
                </CoinSelectList>
            </Rows>
            <Rows>
                <Continue>Continue</Continue>
            </Rows>
            <Rows>
                <BalanceTitle>ETH Balance</BalanceTitle>
                <Balance>8</Balance>
            </Rows>
        </TransferForm>
    </Wrapper>
  );
};

export default Transfer;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    flex: 1;
`

const Amount = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`
const FlexInputContainer = styled.div`
    flex: 1;
    display: flex;
    alignn-items: flex-end;

    & > span {
        font-size: 3rem;
        margin-bottom: 0.5rem;
        color: #F6AF48;
    } 
`

const FlexInput = styled.input`
    border: none;
    background: none;
    outline: none;
    color: white;
    font-size: 2rem;
    text-wrap: none;
    text-align: right;
    max-width: 45%;
    marginn-right: 0.5rem;
    font-size: 2rem;
    color: #F6AF48;

    &::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button{
        -webkit-appearance: none;
    }
`
const Warning = styled.div`
    padding: 1rem 0 2rem 0;
    text-align: center;
    color: #ff5a5f;
`
const Divider = styled.div`
    border-bottom: 1px solid #282b2f;
`

const TransferForm = styled.div`
    border: 1px solid #282b2f;
    border-radius: 0.5rem;
`
const Rows = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #8a919e;
    padding: 1rem 0.8rem;
    font-size: 1.2rem;
`
const FieldName = styled.div`
    width: 50%;
    text-align: left;
`
const Icon = styled.div`
    margin-right: 1rem;
    height: 1.8rem;
    width: 1.8rem;
    border-radius: 50%;
    overflow: hidden;
    display: grid;
    place-items: center;

    & > img {
        height: 120%;
        width: 120%;
        object-fit: cover;
    }
`
const Recipient = styled.input`
    border: none;
    background: none;
    color: white;
    outline: none;
    flex: 1;
    font-size: 1.2rem;
    text-wrap: wrap;
    margin-right: 0.8rem;
`
const CoinSelectList = styled.div`
    flex: 1.3;
    height: 100%;
    display: flex;

    &:hover {
        cursor: pointer;
    }
`
const CoinName = styled.div`
    border: none;
    margin-right: 1rem;
    background: none;
    flex: 1;
    outline: none;
    color: white;
    font-size: 1.2rem;
    text-wrap: wrap;
`  

const Continue = styled.button`
    color: white;
    background: #F6AF48;
    border-radius: 0.5rem;
    padding: 1rem;
    width: 100%;
    text-align: center;
    font-size: 1.2rem;

    &:hover {
        cursor: pointer;
        background-color: #F6AF48;
    }
`
const BalanceTitle = styled.div``
const Balance = styled.div``


