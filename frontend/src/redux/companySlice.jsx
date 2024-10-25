import { createSlice } from "@reduxjs/toolkit";

const CompanySlice = createSlice({
    name: "company",
    initialState: {
        allCompanies: [],
        singleCompany: null
    },
    reducers: {
        // actions
        setAllCompanies: (state, action) => {
            state.allCompanies = action.payload;
        },
        setSingleCompany: (state, action) => {
            state.singleCompany = action.payload;
        }
    }
});
export const { setSingleCompany, setAllCompanies } = CompanySlice.actions;
export default CompanySlice.reducer;