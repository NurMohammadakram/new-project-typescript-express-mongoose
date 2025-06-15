
export type IAcademicSemesterName = 'Autumn' | 'Summer' | 'Fall';
export type IAcademicSemesterCode = '01' | '02' | '03';
export type IAcademicSemesterMonth = 'January' | 'February' | 'March' | 'April' | 'May' | 'June' | 'July' | 'August' | 'September' | 'October' | 'November' | 'December';

export type IAcademicSemester = {
    name: IAcademicSemesterName;
    year: string;
    code: IAcademicSemesterCode;
    startMonth: IAcademicSemesterMonth;
    endMonth: IAcademicSemesterMonth;
};
